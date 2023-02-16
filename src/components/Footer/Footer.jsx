import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gmailIcon from "../../assets/icons/gmail.png";
import whatsAppIcon from "../../assets/icons/whatsApp.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-[70vh] flex h-44 w-full flex-row items-end justify-between  bg-color-verde pl-4 pt-7 pr-5 pb-8  md:pb-5">
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
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=jessica_araoz@hotmail.com&su=Consulta&body=${encodeURIComponent('Hola Chimu, me gustaria hacerte una pregunta...')}`}
          >
            <img src={gmailIcon} alt="" />
          </a>
          <a
            target="_blanck"
            href={`https://api.whatsapp.com/send/?phone=5493815136509&text=${encodeURIComponent('Hola Chimu, me gustaria hacerte una pregunta...')}`}
          >
            <img src={whatsAppIcon} alt="" />
          </a>
          <a
            target="_blanck"
            href="https://www.instagram.com/chimu.sublimaciones/"
          >
            <img src={instagramIcon} alt="" />{" "}
          </a>
          <a
            target="_blanck"
            href="https://www.facebook.com/chimusublimaciones"
          >
            <img src={facebookIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
