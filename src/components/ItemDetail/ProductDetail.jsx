const ProductDetail = () => {
    return(
        <section className="container mx-auto px-4 mb-4">
                    <h2 className="font-bold text-2xl mb-3">Taza de polimero personalizada</h2>
                    <h4 className="mb-4">Descripcion</h4>
                    <p className="mb-5">
                        Taza de plastico personalizada con nombre y disenio a eleccion.
                        <br></br>Medidas: 10cm x 8cm de diametro.
                    </p>
                    

                    <div className="grid grid-cols-3  ">
                        <p className="mb-5 col-span-3"><span>ARS 700.00</span></p>
                        
                    <div className="mb-5 col-span-3">
                        <label htmlFor="nameOfTaza" className="form-label inline-block mb-2 text-gray-700"
                                            >Elige tu diseño</label>
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
                                                <option selected>Diseño</option>
                                                <option defaultValue="1">Diseño1</option>
                                                <option value="2">Diseño2</option>
                                                <option value="3">Diseño3</option>
                        </select>
                    </div>
                        

                    <div className="mb-5 xl:w-96 col-span-3">
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
                        
                    <div className="mb-5 col-span-3 ">

                        <label htmlFor="quantitySelect" className="form-label inline-block mb-2 text-gray-700"
                            >Cantidad</label>
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id ='quantitySelect'
                            >
                                <option selected>Open this select menu</option>
                                <option defaultValue="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                        </select>
                        
                        </div>
                        
                        <button className="col-span-3 rounded-md bg-slate-400 py-3 " > Añadir al carrito </button>

                        
                    </div>
                </section>
    )
}


export default ProductDetail;