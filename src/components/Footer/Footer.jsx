import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gmailIcon from "../../assets/icons/gmail.png";
import whatsAppIcon from "../../assets/icons/whatsApp.png";

const Footer = () => {
  return (
    <footer className=" bottom-0 flex h-44  w-full flex-row items-end justify-between bg-color-verde pl-4 pt-7 pr-5 pb-8">
      <nav className="flex flex-col gap-3">
        <a className="text-sm text-white" href="/">
          Inicio
        </a>
        <a className="text-sm text-white" href="/">
          Productos{" "}
        </a>
        <a className="text-sm text-white" href="/">
          Contacto
        </a>
        <a className="text-sm text-white" href="/">
          Sobre nosotros
        </a>
      </nav>

      <div>
        <div className="flex w-16 flex-wrap md:w-full gap-2.5 ">
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
