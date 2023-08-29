import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // current year
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white bg-dark-background border-t-4 border-dark-red py-12 z-30 mt-24">
      <div
        className={"flex flex-col lg:flex-row w-10/12 justify-between mx-auto"}
      >
        <div className={"grid grid-col-1 md:grid-cols-3 gap-12 justify-center"}>
          <div className={"mx-auto"}>
            <h6>Contact Us</h6>
            <p>(717)-717-7171</p>
            <p>support@mofongoui.com</p>
            <p>Support Center</p>
          </div>
          <div className={""}>
            <h6>Information</h6>
            <Link href="/terms-and-conditions">
              <p className={"hover:text-dark-green"}>Terms & Conditions</p>
            </Link>
            <Link href="/blog">
              <p className={"hover:text-dark-green"}>Documentation</p>
            </Link>
            <p>FAQs</p>
          </div>
          <div className={""}>
            <h6>Explore</h6>
            <p>Home</p>
            <p>Components</p>
            <p>Freebies</p>
          </div>
        </div>
        <div className={"mx-auto"}>
          <h6 className={"ml-4 mt-4 lg:mt-0 mb-2 font-normal"}>
            Subscribe to our newsletter
          </h6>
          <div className={"flex"}>
            <input
              className={
                "w-72 border-4 border-dark-red focus:outline-none bg-dark-background rounded-l-full px-4 py-2"
              }
              type="email"
              placeholder="Email Adress"
            />
            <button
              className={
                "bg-dark-red rounded-r-full w-28 px-2 hover:bg-red-500"
              }
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <div className={"flex w-4/12 justify-center mx-auto gap-8 mt-2"}>
            <FaTwitter className={"text-white hover:text-dark-red h-6 w-6"} />
            <FaGithub className={"text-white hover:text-dark-red  h-6 w-6"} />
            <FaInstagram className={"text-white hover:text-dark-red h-6 w-6"} />
          </div>
        </div>
        <div className={"flex justify-center items-baseline"}>
          <p className={"mt-auto"}>© {year} Mofongoui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
