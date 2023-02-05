import { useState } from "react";

import { CartContext } from "../../context/UseCartContext";

import cartIcon from "../../assets/icons/cart.png";
import menuIcon from "../../assets/icons/menu.png";
import CloseIcon from "../icons/CloseIcon";
import FlechaDerecha from "../icons/FlechaAbajo";

import NavSearchIcon from "../icons/NavSearchIcon";

import CartModal from "../CartModal/CartModal";
import LogoIcon from "../icons/LogoIcon";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

const NavBar = () => {
  const { cart } = useContext(CartContext);

  const [navClass, setNavClass] = useState(
    "hidden p-8 text-white md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:static md:p-0 "
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute z-10 text-white top-0 p-2 left-0 h-[105.6vh] sm:w-64 md:h-auto md:p-2 bg-rosa-oscuro flex gap-y-5   w-64 md:w-[50%] flex-col md:flex-row  md:gap-4 md:static md:p-0"
    );
  };

  const handleCloseMenu = () => {
    setNavClass(
      "hidden p-8  md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:static md:p-2  text-white "
    );
  };

  const [dropMenu, setDropMenu] = useState("absolute hidden bg-rosa-oscuro ");

  const [click, setClick] = useState(false);

  const handleClickDropMenu = () => {
    setClick(!click);
    click
      ? setDropMenu(
          " flex flex-col md:absolute  bg-rosa-oscuro pl-4 md:justify-start md:pl-0 "
        )
      : setDropMenu("hidden");
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <header className=" relative flex items-center justify-between bg-rosa-oscuro p-5 ">
      {/* podria poner un selecSelect */}
      <button className="mr-auto md:hidden" onClick={handleOpenMenu}>
        <img src={menuIcon} alt="" />
      </button>
      <nav className={navClass}>
        <button onClick={handleCloseMenu} className="mb-5 md:hidden">
          <CloseIcon />
        </button>
        <a href="/">Inicio</a>
        <div onClick={handleClickDropMenu} className="z-10 cursor-pointer ">
          Productos
          <ul className={dropMenu}>
            <li className="py-2  pl-1 pr-2">
              <NavLink to="/category/tazasbotellas">Tazas/Botellas</NavLink>
            </li>
            <li className="py-2 pl-1 pr-2">
              <NavLink to="/category/kits">Kits</NavLink>
            </li>
            <li className="py-2 pl-1 pr-2">
              <NavLink to="/category/cotillones">Cotillones</NavLink>
            </li>
            <li className="py-2 pl-1 pr-2">Indumentaria</li>
            <li className="py-2 pl-1 pr-2">Papeleria</li>
            <li className="py-2 pl-1 pr-2">Otros</li>
          </ul>
        </div>
        <a href="/">Contacto</a>
        <a href="/">Sobre nosotros</a>
      </nav>
      <div className=" mr-auto ">
        <LogoIcon />
      </div>

      <div className=" mx-2 flex gap-4">
        <div className="hidden md:block">
          <NavSearchIcon navBar={true} />
        </div>
        <button
          className="relative flex items-center justify-center"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          {cart.length > 0 && (
            <span className=" absolute -top-4 text-xs font-bold text-white md:-top-2">
              {cart.length}
            </span>
          )}
          <img src={cartIcon} alt="" />
        </button>
        {isOpenModal && <CartModal />}
      </div>
    </header>
  );
};

export default NavBar;

/* Supongamos que necesito los valores que tailwind no me da. Entonces, podria hacer p-y-[*valor*] , pero no es lo ideal, deberia hacer algo generico porque sino deberia estar atento a cada componente */

/* Deberia tratar de minificar todo, creo que vite lo hace */

/* 



*/
