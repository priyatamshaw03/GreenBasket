import React from "react";
import { assets, footerLinks } from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" px-6 md:px-16 lg:px-24 xl:px-32 pt-8 mt-24 w-full bg-green-500/10 text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-150">
          <img className="h-9" src={assets.logo} alt="Logo" />
          <p className="mt-6 text-sm md:text-base w-full">
            Experience the smarter way to shop groceries online. We deliver fresh groceries and snacks straight to your door. Trusted by thousands of customers, we aim to make your shopping experience simple and affordable.
          </p>
          <div className="flex items-center gap-4 mt-6 text-green-500">
            <a
              href="https://www.facebook.com" target="_blank"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com" target="_blank"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            
            <a
              href="https://x.com" target="_blank"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 9876543210</p>
              <p>greenbasket@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm text-gray-500/80">
        Copyright {new Date().getFullYear()} © GreenBasket. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
