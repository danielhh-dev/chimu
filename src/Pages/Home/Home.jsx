import MainSlider from "../../components/MainSlider/MainSlider";
import MainListContainer from "../../containers/MainContainer/MainListContainer";
import NavSearchIcon from "../../components/icons/NavSearchIcon";
import creamos from "./creamos.png";
import personalizamos from "./personalizamos.png";
import realizamos from "./realizamos.png";
import merienda from "./merienda.png";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Home = () => {
  const title = "Conocé nuestros productos";
  const [products, setProducts] = useState([]);

  const db = getFirestore();
  const queryCollection = collection(db, "items");

  useEffect(() => {
    getDocs(
      query(queryCollection, where("category", "==", "principales"))
    ).then((res) =>
      setProducts(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  return (
    <div className="m-auto flex flex-col items-center md:w-9/12 ">
      <NavSearchIcon navBar={false} />
      <MainSlider />
      <MainListContainer />
      <section className=" mt-10 hidden w-11/12  flex-col items-center  border-y-4 border-y-color-verde  py-16 md:flex ">
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
        className="my-20 h-[560px] w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${merienda})` }}
      ></section>
    </div>
  );
};

export default Home;
