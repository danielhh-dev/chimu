import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gmailIcon from "../../assets/icons/gmail.png";
import whatsAppIcon from "../../assets/icons/whatsApp.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  mt-[180px] flex h-44 w-full flex-row items-end  justify-between bg-color-verde pl-4 pt-7 pr-5 pb-8 md:pb-5">
      <nav className="flex flex-col gap-3 ">
        <NavLink to="/" className="text-sm text-white md:text-lg ">
          Inicio
        </NavLink>
        <NavLink to="/contact" className="text-sm text-white md:text-lg ">
          Contacto
        </NavLink>
        <NavLink to="/about" className="text-sm text-white md:text-lg ">
          Sobre nosotros
        </NavLink>
      </nav>

      <div>
        <div className="flex w-16 flex-wrap gap-2.5 md:w-full ">
          <img src={gmailIcon} alt="" />
          <img src={whatsAppIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={facebookIcon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
