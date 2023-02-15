import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gmailIcon from "../../assets/icons/gmail.png";
import whatsAppIcon from "../../assets/icons/whatsApp.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-[280px] flex h-44 w-full flex-row items-end justify-between  bg-color-verde pl-4 pt-7 pr-5 pb-8 md:mt-[180px] md:pb-5">
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
          <a
            target="_blanck"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com%22%3E"
          >
            <img src={gmailIcon} alt="" />
          </a>
          <a
            target="_blanck"
            href="https://api.whatsapp.com/send/?phone=5492302554639&text=Hola%22%3E"
          >
            <img src={whatsAppIcon} alt="" />
          </a>
          <a
            target="_blanck"
            href="https://www.instagram.com/chimu.sublimaciones/%22%3E"
          >
            <img src={instagramIcon} alt="" />{" "}
          </a>
          <a
            target="_blanck"
            href="https://www.facebook.com/chimusublimaciones%22%3E"
          >
            <img src={facebookIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
