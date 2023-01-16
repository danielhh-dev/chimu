import { useState } from "react";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";

const NavBar = () => {

    const [navClass,setNavClass] = useState('hidden  p-8  md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:static md:p-0')

    const handleOpenMenu = () => {
        setNavClass('absolute z-10 text-white top-0 left-0 h-full p-8 bg-gris-oscuro flex gap-y-5 font-bold w-3/5 flex-col md:flex-row md:mr-auto md:gap-4 md:static md:p-0')
    }

    const handleCloseMenu = () => {
        setNavClass('hidden p-8 font-bold md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:static md:p-0')
    }

    return(
        <header className="flex bg-rosa-oscuro px-4 items-center">

            <button className="md:hidden mr-auto" onClick={handleOpenMenu}><MenuIcon/></button>
            <h1 className="mr-auto m-2">CHIMU</h1>
            
            <nav className={navClass}> 
                <button onClick={handleCloseMenu} className="mb-5 md:hidden"><CloseIcon/></button>
                <a href="/">Inicio</a>
                <a href="/">Productos </a>
                <a href="/">Contacto</a>
                <a href="/">Sobre nosotros</a>
            </nav>
            
            <div className="flex gap-4">
                <button><SearchIcon/></button>
                <button><CartIcon/></button>
            </div>

        </header>
    )
}

export default NavBar;

/* Supongamos que necesito los valores que tailwind no me da. Entonces, podria hacer p-y-[*valor*] , pero no es lo ideal, deberia hacer algo generico porque sino deberia estar atento a cada componente */

/* Deberia tratar de minificar todo, creo que vite lo hace */