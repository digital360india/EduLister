import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const cities = [
  "Dehradun", "Bangalore", "Hyderabad", "Nainital",
  "Mussoorie", "India", "Pune", "Panchgani",
  "Shimla", "Jaipur", "Mumbai", "Delhi",
  "Ooty", "Kodaikanal", "Darjeeling", "Chennai",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-foreground px-6 md:px-12 lg:px-20">
      <div className="container-page grid gap-10 py-16 md:grid-cols-3">
        <div>
          <Image
            src="/GoEdu (4) 3.svg"
            alt="EduLister"
            width={160}
            height={64}
            className="h-16 w-auto dark:hidden"
          />
          <Image
            src="/GoEdu (4) 3.svg"
            alt="EduLister"
            width={160}
            height={64}
            className="hidden h-16 w-auto dark:block"
          />

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <a href="tel:+919760548360" className="hover:text-primary">
                +91-97605 48360
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <a href="tel:+918303022306" className="hover:text-primary">
                +91-8303022306
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <a href="mailto:edulisterr@gmail.com" className="hover:text-primary">
                edulisterr@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-primary" />
              <span>B-36, Nehru Colony, Dharampur, Dehradun</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-foreground">Important Links</h4>
          <div className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/blog" className="hover:text-primary">Blogs</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/schools" className="hover:text-primary">Schools</Link>
            <Link href="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="/cookies" className="hover:text-primary">Cookie Policy</Link>
            <Link href="/compare" className="hover:text-primary">Compare</Link>
            <Link href="/disclaimer" className="hover:text-primary">Disclaimer</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-foreground">Follow us on</h4>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1EeU4BZvJV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/edulister_india?igsi=Y2wzOTc4NHByamNr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}