import MainSlider from "../../components/MainSlider/MainSlider";
import MainListContainer from "../../containers/MainContainer/MainListContainer";
import NavBar from "../../components/navbar/MainNavBar";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import creamos from "./creamos.png";
import personalizamos from "./personalizamos.png";
import { NavLink } from "react-router-dom";
import realizamos from "./realizamos.png";
import merienda from "./merienda.png";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="m-auto flex flex-col items-center md:w-9/12 ">
        <NavSearchIcon navBar={false} />
        <MainSlider />
        <MainListContainer />
        <section className=" mt-10 hidden w-11/12 flex-col items-center text-center  border-y-4 border-y-color-verde  py-16 md:flex ">
          <h2 className="mb-20 text-4xl">
            Ideamos los mejores y más originales regalos
          </h2>
          <div className="m-auto flex w-9/12 justify-between">
            <div className="flex flex-col items-center">
              <img className="w-56" src={realizamos} alt="" />
              <p className="w-64  pt-8 text-center text-xl">
                Realizamos envíos en todo el país
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-56" src={personalizamos} alt="" />
              <p className="w-64  pt-8 text-center text-xl">
                Personalizamos según tus gustos
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-56" src={creamos} alt="" />
              <p className=" w-64  pt-8 text-center text-xl">
                Creamos e ideamos las mejores ideas para vos
              </p>
            </div>
          </div>
        </section>
        <section>

        </section>
        <p className=" text-2xl md:text-4xl mt-8">Set de meriendas</p>
        <p className=" text base text-center w-9/12 md:text-xl my-4">Prepará el mejor set de meriendas antes de que empiecen las clases</p>
        <div
          className="my-4 w-[300px] h-[200px] md:h-[460px] md:w-[800px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${merienda})` }}
        ></div>
        <NavLink className=" grid place-items-center  md:-my-40 mx-auto h-12 w-1/2 rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/4" to="/detail/7Vn2u89TtyTPervYNstX">
             Personalizar
        </NavLink>
      </div>
    </>
  );
};

export default Home;
