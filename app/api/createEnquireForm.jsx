import { enForm } from "./airtable";

export default async (req, res) => {
  const { firstName, email, classes,phoneNumber, board, type } = req.body;

  try {
    const createdRecords = await enForm.create([
      { fields: { firstName, email, classes ,phoneNumber, board,type } },
    ]);

    res.statusCode = 200;
    res.json(createdRecords);
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
