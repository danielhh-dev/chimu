import { useState } from "react";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import FlechaDerecha from "../icons/FlechaAbajo";
import MenuIcon from "../icons/MenuIcon";
import NavSearchIcon from "../icons/NavSearchIcon";


import CartModal from "../CartModal/CartModal";
import LogoIcon from "../icons/LogoIcon";

const NavBar = () => {

const [navClass,setNavClass] = useState('hidden p-8 text-white md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:static md:p-0')

const handleOpenMenu = () => {
    setNavClass('absolute z-10 text-white top-0 left-0 h-[105.6vh] md:h-auto md:p-8 bg-rosa-oscuro  flex gap-y-5 font-bold w-3/5 flex-col md:flex-row md:mr-10 md:gap-4 md:static md:p-0')
}

const handleCloseMenu = () => {
    setNavClass('hidden p-8 font-bold md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:static md:p-0')
}
    /* const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleOpenMenu = () => { 
        setIsOpenMenu(true)
    }

    const handleCloseMenu = () => { 
        setIsOpenMenu(false)
    } */

    const [dropMenu, setDropMenu] = useState('absolute hidden bg-rosa-oscuro ')

    const [click,setClick] = useState(false)

    const handleClickDropMenu = ()=> {
        setClick(!click)
        click
            ?setDropMenu('absolute  bg-rosa-claro' )
            :setDropMenu('hidden')
    }

    const [isOpenModal, setIsOpenModal] = useState(false)

    return(
        <header className=" relative flex bg-rosa-oscuro p-5 items-center justify-between ">
            {/* podria poner un selecSelect */}
            <button className="md:hidden mr-auto" onClick={handleOpenMenu}><MenuIcon/></button>
            <nav className={navClass}> 
                <button onClick={handleCloseMenu} className="mb-5 md:hidden"><CloseIcon/></button>
                <a href="/">Inicio</a>
                <div onClick={handleClickDropMenu} className='cursor-pointer z-10 '> 
                    Productos
                    <ul className={dropMenu}>
                        <li className="py-2  pl-1 pr-2">Tazas/Botellas</li>
                        <li className="py-2 pl-1 pr-2">Kits</li>
                        <li className="py-2 pl-1 pr-2">Cotillones</li>
                        <li className="py-2 pl-1 pr-2">Indumentaria</li>
                        <li className="py-2 pl-1 pr-2">Papeleria</li>
                        <li className="py-2 pl-1 pr-2">Otros</li>
                    </ul>
                </div>
                <a href="/">Contacto</a>
                <a href="/">Sobre nosotros</a>
            </nav>
            <div className=" mr-auto "><LogoIcon/></div>
            
            <div className=" flex gap-4 mx-2">
                <div className="hidden md:block">

                <NavSearchIcon />
                </div>
                <button onClick={()=>setIsOpenModal(!isOpenModal)}><CartIcon/></button>
                {isOpenModal && <CartModal/>}
            </div>

        </header>
    )
}

export default NavBar;

/* Supongamos que necesito los valores que tailwind no me da. Entonces, podria hacer p-y-[*valor*] , pero no es lo ideal, deberia hacer algo generico porque sino deberia estar atento a cada componente */

/* Deberia tratar de minificar todo, creo que vite lo hace */


/* 



*/