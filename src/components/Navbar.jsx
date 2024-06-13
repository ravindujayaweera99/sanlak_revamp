import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div
      className="hidden md:flex justify-center items-center bg-blue px-12 text-white h-[10vh]"
      
    >
      <motion.ul className="flex justify-between items-center gap-12 font-primary font-extralight" initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
        <a href="">
          <li className="hover:text-orange">Our Services</li>
        </a>
        <a href="">
          <li className="hover:text-orange">Our Projects</li>
        </a>
        <a href="">
          <img src={logo} alt="" className="h-32" />
        </a>
        <a href="">
          <li className="hover:text-orange">Proposed Designs</li>
        </a>
        <a href="">
          <li className="hover:text-orange">About Us</li>
        </a>
      </motion.ul>
    </div>
  );
};

export default Navbar;
