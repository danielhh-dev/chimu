import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";


const Footer = () => {
    return(
        <footer className="grid grid-cols-2 p-10 bg-color-verde">
            <nav className="flex flex-col gap-5">
                <a href="/">Inicio</a>
                <a href="/">Productos </a>
                <a href="/">Contacto</a>
                <a href="/">Sobre nosotros</a>
            </nav>
            <div className="grid grid-cols-1 place-items-end">
                <div className="flex">
                    <InstagramIcon/>
                    <FacebookIcon/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;