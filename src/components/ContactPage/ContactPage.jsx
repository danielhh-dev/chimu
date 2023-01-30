const ContactPage = () => {
    return(
        <section className="">
            <h1 className="text-center my-6 text-3xl">Contacto</h1>
            <p className="hidden md:flex md:justify-center md:my-8">Si estás buscando un diseño personalizado. Dejanos tus datos de contacto para poder brindarte lo mejor.</p>

            <form className="grid grid-cols-1 justify-items-center md:grid-cols-2 md:mx-50 lg:mx-60 ">
                <div className="flex flex-col w-[90%] mb-4 ">
                    <label > Nombre y apellido</label>
                    <input className="bg-rosa-claro rounded-lg h-16 divide-red-600" type="text" name="" id="" placeholder="hola"/>
                </div>

                <div className="flex flex-col  w-[90%]  mb-4">
                    <label > Email</label>
                    <input className="bg-rosa-claro rounded  h-16" type="text" name="" id=""placeholder="hola" />
                </div>

                <div className="flex flex-col  w-[90%]  mb-4">
                    <label >Telefono</label>
                    <input className="bg-rosa-claro rounded h-16" type="text" name="" id="" placeholder="hola"/>
                </div>

                <div className="flex flex-col  w-[90%]  mb-4">
                    <label > Producto</label>
                    <input className="bg-rosa-claro rounded h-16" type="text" name="" id="" placeholder="hola"/>
                </div>

                <div className="flex flex-col  w-[90%]  mb-4 md:col-span-2 md:w-[95%]">
                    <label > Comentarios</label>
                    <textarea className="bg-rosa-claro rounded h-24" type="text" name="" id="">asddassdasdasdasdasdasd</textarea>
                </div>
                <button className="bg-color-verde h-10 w-1/2 rounded-lg my-6 text-white md:col-span-2 md:w-1/3">Enviar</button>
            </form>


            <div className="">
                
            </div>
        </section>
    )
}

export default ContactPage;