import { useState } from "react";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import FlechaDerecha from "../icons/FlechaDerecha";
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";

import imgcart from '../../assets/imagen-1.jpg'
import DeleteIcon from "../icons/DeleteIcon";

const NavBar = () => { /*  */

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleOpenMenu = () => { 
        setIsOpenMenu(!isOpenMenu)
    }

    const handleCloseMenu = () => { 
        setIsOpenMenu(!isOpenMenu)
    }

    const [dropMenu, setDropMenu] = useState('absolute hidden bg-rosa-oscuro ')

    const [click,setClick] = useState(false)

    const handleClickDropMenu = ()=> {
        setClick(!click)
        click
            ?setDropMenu('absolute  bg-rosa-claro' )
            :setDropMenu('absolute hidden bg-rosa-oscuro')
    }

    return(
        <header className=" relative flex bg-rosa-oscuro p-5 items-center justify-between 	">
            {/* podria poner un selecSelect */}
            <button className="md:hidden mr-auto" onClick={handleOpenMenu}><MenuIcon/></button>
            <nav className={`font-bold md:static  md:gap-8 md:mr-0 p-8  md:flex md:h-auto md:flex-row  md:p-0 ${isOpenMenu? 'absolute text-white font-bold  bg-gris-oscuro top-0 left-0 flex h-full w-4/5 flex-col gap-y-5 p-8 z-10' : 'hidden'}`}> 
                <button onClick={handleCloseMenu} className="mb-5 md:hidden"><CloseIcon/></button>
                <a href="/">Inicio</a>
                <div onClick={handleClickDropMenu} className='cursor-pointer z-10'> 
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
            <h1 className=" mx-auto ">CHIMU</h1>
            
            <div className=" flex gap-4 mx-2">
                <SearchIcon/>
                <button><CartIcon/></button>
                <section className="absolute  top-[125%] z-10 left-0 w-full ">
                    
                    <div className="bg-green-400 mx-4 rounded-md"> 
                        <h4 className="px-6 py-8 font-bold text-lg">Carrito</h4>
                        <hr />
                        <div className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-8">
                            <img src={imgcart} alt="" className="rounded-md"/>
                            <div>
                                <h6>Taza de polimero personalizada</h6>
                                <div>
                                    <span>ARS 700 x 3</span> <span className="font-bold">ARS2100</span>
                                </div>
                            </div>
                            <button><DeleteIcon fill="#000"/></button>
                        </div>
                    </div>
                    
                </section>
            </div>

        </header>
    )
}

export default NavBar;

/* Supongamos que necesito los valores que tailwind no me da. Entonces, podria hacer p-y-[*valor*] , pero no es lo ideal, deberia hacer algo generico porque sino deberia estar atento a cada componente */

/* Deberia tratar de minificar todo, creo que vite lo hace */