import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events"],
  },
];
 

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            
            <footer className="relative w-full bg-black">
                <div className="mx-auto w-full container pt-10 pb-1 text-center md:text-left">
                    <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                        <div className="text-center md:text-left">
                            <Link to={'/'} className="font-bold text-2xl md:text-3xl text-white">Dream <span className="text-green-700">Vista</span></Link>
                            <p className="pt-2 pb-2 md:pb-0 font-medium w-[270px] md:w-[250px] lg:w-[350px] mx-auto md:mx-0 text-gray-500 text-center md:text-left text-sm md:text-base">Explore our properties and find your dream home. Contact us for inquiries or to schedule a viewing.</p>
                        </div>

                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                        <ul key={title}>
                            <Typography
                            className="mb-1 font-semibold text-gray-50 md:text-xl opacity-60"
                            >
                            {title}
                            </Typography>
                            {items.map((link) => (
                            <li key={link}>
                                <Typography
                                as="a"
                                href="#"
                                color="gray"
                                className="py-1.5 font-normal transition-colors hover:text-gray-500 text-sm md:text-base"
                                >
                                {link}
                                </Typography>
                            </li>
                            ))}
                        </ul>
                        ))}
                    </div>
                    </div>
                    <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-900 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-gray-500 md:mb-0"
                    >
                        &copy; {currentYear} <Link to={'/'}><b>Dream Vista</b></Link>. All
                        Rights Reserved.
                    </Typography>


                    <div className="flex gap-4 text-white sm:justify-center">
                        <Typography as="a" href="https://www.facebook.com/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaSquareFacebook className="text-xl md:text-2xl lg:text-3xl"/>
                        </Typography>

                        <Typography as="a" href="https://www.instagram.com/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaInstagram className="text-xl md:text-2xl lg:text-3xl"/>
                        </Typography>

                        <Typography as="a" href="https://www.twitter.com/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaXTwitter className="text-xl md:text-2xl lg:text-3xl"/>
                        </Typography>

                        <Typography as="a" href="https://www.github.com/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaGithub className="text-xl md:text-2xl lg:text-3xl"/>
                        </Typography>
                    </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;