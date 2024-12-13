import { SHA256 } from "crypto-js";
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, mobile, muid } = req.body;
      // Set your merchant-specific values here
      const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID;
      const saltKey = process.env.NEXT_PUBLIC_SALT_KEY;
      const saltIndex = process.env.NEXT_PUBLIC_SALT_INDEX;
      const transactionId = "Tr-" + Math.random().toString(36).substring(2, 15);
      // Production: Make sure you're using HTTPS for all URLs
      const redirectUrl = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/status/${transactionId}`;
      const callbackUrl = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/status/${transactionId}`;
      // Payment payload to be sent to PhonePe
      const payload = {
        merchantId: merchantId,
        merchantTransactionId: transactionId,
        merchantUserId: muid,
        amount: amount * 100, // Amount in paise/cents (multiply by 100)
        redirectUrl: redirectUrl,
        redirectMode: "POST",
        callbackUrl: callbackUrl,
        mobileNumber: mobile,
        paymentInstrument: {
          type: "PAY_PAGE"
        }
      };
      // Convert payload to base64 string
      const dataPayload = JSON.stringify(payload);
      const dataBase64 = Buffer.from(dataPayload).toString("base64");
      // Generate checksum using SHA256
      const fullURL = `/pg/v1/pay${dataBase64}${saltKey}`;
      const checksum = SHA256(fullURL).toString() + "###" + saltIndex;
      // **Production API URL** for PhonePe
      const PRODUCTION_PAY_API_URL = "https://api.phonepe.com/apis/pg/v1/pay";
      // Make a request to PhonePe production payment API
      const response = await fetch(PRODUCTION_PAY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
          'accept': 'application/json',
        },
        body: JSON.stringify({ request: dataBase64 })
      });
      const responseData = await response.json();
      const redirectUrlResponse = responseData?.data?.instrumentResponse?.redirectInfo?.url;
      // Send back the redirection URL
      if (redirectUrlResponse) {
        res.status(200).json({ redirectUrl: redirectUrlResponse });
      } else {
        console.error("Error initiating payment:", responseData);
        res.status(400).json({ error: "Payment initiation failed", details: responseData });
      }
    } catch (error) {
      console.error("Error in server-side processing:", error);
      res.status(500).json({ error: "Server Error", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
