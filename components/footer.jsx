import { FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-purples">
            <div className="container mx-auto py-10 text-grey-secondary">
                <h4>©2023 MyShoes</h4>
                <div className="flex justify-between mt-8 border-t-[1px] pt-7">
                    <ul className="flex items-center gap-8">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="flex items-center gap-5">
                        <FaFacebookF />
                        <FaYoutube />
                        <FaLinkedinIn />
                        <FaTwitter />
                        <FaInstagram />
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
