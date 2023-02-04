import FlechaAbajo from "../icons/FlechaAbajo";
import FlechaArriba from "../icons/FlechaArriba";

const ProductSpecs = () => {
  return (
    <div className="mx-4 mb-6 grid grid-cols-2 md:mx-0">
      <div className="col-span-3 mb-5 w-1/2 ">
        <label
          htmlFor="nameOfTaza"
          className="form-label mb-2 inline-block text-gray-700"
        >
          Elige tu diseño{" "}
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
        >
          <option defaultValue="1">Diseño1 </option>
          <option value="2">Diseño2</option>
          <option value="3">Diseño3</option>
        </select>
      </div>

      <div className="col-span-3 mb-5 w-1/2 xl:w-96">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label mb-2 inline-block text-gray-700"
        >
          Escribe aqui el nombre para tu taza
        </label>
        <textarea
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
          id="exampleFormControlTextarea1"
          rows="1"
          placeholder="Nombre"
        ></textarea>
      </div>
    </div>
  );
};

export default ProductSpecs;
