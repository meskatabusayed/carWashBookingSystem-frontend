import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import '../navber/logo.css'
const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] py-12 w-full">
      <div className="container max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="logo-container">
              <span className="logo-text">PH Clining</span>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="mb-2 text-white text-bold text-[17px] font-[600]">
              Office Address
            </h4>
            <p className="text-white">
              Level-4, 34, Awal Centre, Banani, Dhaka
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-[17px] text-white text-bold font-[600]">
              Contact
            </h4>
            <p className="text-white">
              Phone: (+880) 1756457677
              <br />
              Email: info@phclining.com
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-white text-bold">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <Link
                to="https://www.facebook.com/programmingherowebcourse"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5 text-white hover:text-muted-foreground transition" />
              </Link>
              <Link
                to="https://www.instagram.com/programminghero/"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5 text-white hover:text-muted-foreground transition" />
              </Link>
              <Link
                to="https://www.linkedin.com/company/programminghero/posts/?feedView=all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5 text-white hover:text-muted-foreground transition" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-[15px] text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/" className="hover:underline">
            Booking
          </Link>
          <Link to="#" className="hover:underline">
            Services
          </Link>
          <Link to="#" className="hover:underline">
            Dashboard
          </Link>
          <Link to="#" className="hover:underline">
            Faq
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 text-xs text-white">
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="#" className="hover:underline">
            Cookie Policy
          </Link>
        </div>
        <p className="text-xs text-white">
          &copy; 2024 PH cleaning Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
