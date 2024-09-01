import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
<nav className="mb-20 flex items-center justify-between py-6 px-4">
    <div className="flex flex-shrink-0 items-center">
        <h2 className="text-black font-semibold text-2xl">VK</h2>
    </div>
    <div className="m-8 flex gap-10 text-2xl text-black">
        <FaLinkedin/>
        <FaInstagram/>
        <FaGithub/>
    </div>
</nav>  
)
}

export default Navbar;