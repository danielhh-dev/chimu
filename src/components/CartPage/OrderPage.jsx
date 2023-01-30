/* (VISTA_MOVIL)Originalmente en hidden o podria no llamarlo  -> Esta es la pagina que viene de hacer click en 'Hacer pedido en la pagina Carrito' */

const OrderPage = () => { 
    return(
        <section className="hidden">
            <h1 className="text-center my-6 text-3xl">Tu pedido/tus datos</h1>
            
            <form className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:mx-50 lg:mx-60 ">
                <div className="flex flex-col w-[90%] mb-4 ">
                    <label > Nombre y apellido</label>
                    <input className="bg-rosa-claro rounded-lg h-16 divide-blue-600" type="text" name="" id="" placeholder="hola"/>
                </div>

                <div className="flex flex-col  w-[90%]  mb-4">
                    <label >Telefono</label>
                    <input className="bg-rosa-claro rounded h-16" type="text" name="" id="" placeholder="hola"/>
                </div>

                <div className="flex flex-col  w-[90%]  mb-4">
                    <label> Correo electronico</label>
                    <input className="bg-rosa-claro rounded  h-16" type="text" name="" id=""placeholder="hola" />
                </div>

                <div className="flex flex-col  w-[90%]  mb-4">
                    <label > Direccion de envio <span className="text-sm text-gray-400 ">(Si preferis un punto de encuentro por favor, indica cual).</span></label>
                    <input className="bg-rosa-claro rounded h-16" type="text" name="" id="" placeholder="hola"/>
                </div>

                <div className="flex flex-col  w-[90%]  mb-4 md:col-span-2 md:w-[95%]">
                    <label > Comentarios</label>
                    <textarea className="bg-rosa-claro rounded h-24" type="text" name="" id="">asddassdasdasdasdasdasd</textarea>
                </div>
                <button className="bg-color-verde h-10 w-1/2 rounded-lg my-6 text-white md:col-span-2 md:w-1/3">Hacer pedido</button>
                <p className= "md:col-span-2 text-gray-400  underline mb-6">Seguir comprando</p> {/* Podria ser un navLink */}
            </form>
        </section>
    )
}

export default OrderPage;
