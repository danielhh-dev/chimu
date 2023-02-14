import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gmailIcon from "../../assets/icons/gmail.png";
import whatsAppIcon from "../../assets/icons/whatsApp.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  flex h-44 w-full flex-row items-end justify-between  bg-color-verde pl-4 pt-7 pr-5 pb-8 md:pb-5 mt-[180px]">
      <nav className="flex flex-col gap-3 ">
        <NavLink className="text-sm text-white md:text-lg " to="/">
          Inicio
        </NavLink>
        <NavLink className="text-sm text-white  md:text-lg" to="/category">
          Productos{" "}
        </NavLink>
        <NavLink className="text-sm text-white  md:text-lg" to="/contact">
          Contacto
        </NavLink>
        <NavLink className="text-sm text-white  md:text-lg" to="/about">
          Sobre mi
        </NavLink>
      </nav>

      <div>
        <div className="flex w-16 flex-wrap gap-2.5 md:w-full ">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com"><img src={gmailIcon} alt="" /></a>
          <a href="https://api.whatsapp.com/send/?phone=5492302554639&text=Hola"><img src={whatsAppIcon} alt="" /></a>
          <img src={instagramIcon} alt="" />
          <img src={facebookIcon} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
