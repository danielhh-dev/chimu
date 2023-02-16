import MainSlider from "../../components/MainSlider/MainSlider";
import MainListContainer from "../../containers/MainContainer/MainListContainer";
import NavBar from "../../components/navbar/MainNavBar";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import creamos from "./creamos.png";
import personalizamos from "./personalizamos.png";
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
        <section
          className="my-20 h-[560px] w-96 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${merienda})` }}
        ></section>
      </div>
    </>
  );
};

export default Home;
