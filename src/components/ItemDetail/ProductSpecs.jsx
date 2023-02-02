import FlechaAbajo from '../icons/FlechaAbajo';
import FlechaArriba from '../icons/FlechaArriba';

const ProductSpecs = () => {
    return(
        <div className="grid grid-cols-2 mb-6 mx-4 md:mx-0">
                        <div className="mb-5 col-span-3 w-1/2 ">
                            <label htmlFor="nameOfTaza" className="form-label inline-block mb-2 text-gray-700"
                                                >Elige tu diseño </label>
                            <select className="form-select appearance-none
                                                block
                                                w-full
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-slate-200 bg-clip-padding bg-no-repeat
                                                border border-solid border-gray-300
                                                rounded
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id ='nameOfTaza 'aria-label="Default select example">
                                                    <option defaultValue="1">Diseño1 </option>
                                                    <option value="2">Diseño2</option>
                                                    <option value="3">Diseño3</option>
                            </select>
                        </div>
                        

                    <div className="mb-5 xl:w-96 col-span-3 w-1/2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
                            >Escribe aqui el nombre para tu taza</label>
                        <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-slate-200 bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="exampleFormControlTextarea1"
                            rows="1"
                            placeholder="Nombre"
                        ></textarea>
                    </div>
                        
                    
                
                        
                        
                </div>
    )
}

export default ProductSpecs;