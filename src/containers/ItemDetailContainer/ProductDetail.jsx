import { useContext, useState } from "react";
import { CartContext } from "../../context/UseCartContext";
import FlechaAbajo from "../../components/icons/FlechaAbajo";
import FlechaArriba from "../../components/icons/FlechaArriba";
import { uploadFile } from "../../firebase/config";

const ProductDetail = ({ product }) => {
  const [modelSelected, setModelSelected] = useState("");
  const [nameSelected, setNameSelected] = useState("");
  const [file, setFile] = useState(null);

  const [contador, setContador] = useState(1);
  // aumenta contador
  const addNumber = () => {
    setContador(contador + 1);
  };

  //disminuye contador
  const deleteNumber = () => {
    if (contador !== 1) setContador(contador - 1);
  };

  const { addToCart } = useContext(CartContext);
  // agregar al carrito desde Detail

  const onAdd = () => {
    handleUpload();
    if (!modelSelected) {
      product.modelSelected = "sinModelo";
      addToCart(product, contador);
    } else {
      product.modelSelected = modelSelected;
      addToCart(product, contador);
    }
    if (!nameSelected) {
      product.nameSelected = "sinNombre";
      addToCart(product, contador);
    } else {
      product.nameSelected = nameSelected;
      addToCart(product, contador);
    }
  };

  const handleChangeModel = (e) => {
    setModelSelected(e.target.value);
  };
  const handleChangeName = (e) => {
    setNameSelected(e.target.value);
    console.log(nameSelected);
  };

  const handleUpload = async () => {
    try {
      const imageURL = await uploadFile(file);
      product = { ...product, uploadedImage: imageURL };
    } catch (error) {
      alert("Fallo interno, intente más tarde");
    }
  };

  // console.log(product.image.length);

  return (
    <section className="container mx-auto mb-4 px-4">
      <h2 className="mb-3 text-2xl font-bold">{product.name}</h2>
      <h4 className="mb-4">Descripcion</h4>

      <p className="mb-5">{product.description}</p>
      <p className="col-span-3 mb-5">
        <span>ARS {product.price}</span>
      </p>

      <div className=" mb-6 grid grid-cols-2 md:mx-0">
        {() => {
          if (product.image.length > 1) {
            return (
              <div className="col-span-3 mb-5 ">
                <label
                  htmlFor="nameOfTaza"
                  className="form-label mb-2 inline-block text-gray-700"
                >
                  Elige tu diseño : {modelSelected}
                </label>

                <select
                  className="form-select m-0
                                                  block
                                                  w-full
                                                  appearance-none
                                                  rounded
                                                  border
                                                  border-solid
                                                  border-gray-300
                                                  bg-slate-200 bg-clip-padding bg-no-repeat
                                                  px-3 py-1.5 text-base
                                                  font-normal
                                                  text-gray-700
                                                  transition
                                                  ease-in-out
                                                  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  id="nameOfTaza "
                  aria-label="Default select example"
                  name="models"
                  onChange={handleChangeModel}
                >
                  {product.models_designs.map((m) => {
                    return (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          }
        }}

        <div className="col-span-3 mb-5  ">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label mb-2 inline-block text-gray-700"
          >
            Escribe aqui el nombre para tu taza
          </label>
          <input
            className="
                                form-control
                                m-0
                                block
                                w-full
                                rounded
                                border
                                border-solid
                                border-gray-300
                                bg-slate-200 bg-clip-padding
                                px-3 py-1.5 text-base
                                font-normal
                                text-gray-700
                                transition
                                ease-in-out
                                focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
                            "
            type="text"
            onChange={handleChangeName}
          />
        </div>
        <div className="col-span-2 grid items-center">
          <p>Carga tu diseño</p>
          <div className="flex justify-center    rounded-lg bg-rosa-claro p-2">
            <p className="p-2">Inserta aquí el archivo de tu diseño</p>
            <input
              type="file"
              id="upload"
              name="upload"
              className="invisible"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              required
            />
            <label htmlFor="upload" className="rounded-sm bg-gray-300 p-2">
              Examinar
            </label>
          </div>
        </div>
      </div>

      <div className="grid items-center">
        <div className="mb-5 flex w-40 flex-col md:col-span-2 md:mx-0 ">
          <h6 className="col-span-2">Cantidad</h6>
          <div className="flex justify-center gap-11   rounded-lg bg-rosa-claro p-2">
            <span>{contador}</span>
            <div className="flex flex-col gap-1 ">
              <button onClick={() => addNumber()}>
                <FlechaArriba />
              </button>
              <button onClick={() => deleteNumber()}>
                <FlechaAbajo />
              </button>
            </div>
          </div>
        </div>
        <button
          className=" mb-10 w-full rounded-md bg-slate-400 py-3  md:col-span-2"
          onClick={() => onAdd()}
        >
          Añadir al carrito
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
