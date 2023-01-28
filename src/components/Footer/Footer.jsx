import FacebookIcon from "../icons/FacebookIcon";
import GmailIcon from "../icons/GmailIcon";
import InstagramIcon from "../icons/InstagramIcon";
import WhatsappIcon from "../icons/WhatsappIcon";


const Footer = () => {
    return(
        <footer className="grid grid-cols-[1fr_.1fr] p-10 bg-color-verde">
            <nav className="flex flex-col gap-5">
                <a href="/">Inicio</a>
                <a href="/">Productos </a>
                <a href="/">Contacto</a>
                <a href="/">Sobre nosotros</a>
            </nav>
            <div className="grid grid-cols-2 place-items-end ">
                <div className="flex ">
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <GmailIcon/>
                    <WhatsappIcon/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;