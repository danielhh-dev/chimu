import NavBar from "../../components/navbar/MainNavBar";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <section className="">
        <h1 className="my-6 text-center text-3xl">Contacto</h1>
        <p className="hidden md:my-8 md:flex md:justify-center">
          Si estás buscando un diseño personalizado. Dejanos tus datos de
          contacto para poder brindarte lo mejor.
        </p>

        <form className="md:mx-50 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:mx-60 ">
          <div className="mb-4 flex w-[90%] flex-col ">
            <label> Nombre y apellido</label>
            <input
              className="h-16 divide-red-600 rounded-lg bg-rosa-claro"
              type="text"
              name=""
              id=""
              placeholder="Maria Perez"
            />
          </div>

          <div className="mb-4 flex  w-[90%]  flex-col">
            <label> Email</label>
            <input
              className="h-16 rounded  bg-rosa-claro"
              type="text"
              name=""
              id=""
              placeholder="mariaperez@gmail.com"
            />
          </div>

          <div className="mb-4 flex  w-[90%]  flex-col">
            <label>Telefono</label>
            <input
              className="h-16 rounded bg-rosa-claro"
              type="text"
              name=""
              id=""
              placeholder="2302558877"
            />
          </div>

          <div className="mb-4 flex  w-[90%]  flex-col">
            <label> Producto</label>
            <input
              className="h-16 rounded bg-rosa-claro"
              type="text"
              name=""
              id=""
              placeholder="Taza de polimero"
            />
          </div>

          <div className="mb-4 flex  w-[90%]  flex-col md:col-span-2 md:w-[95%]">
            <label> Comentarios</label>
            <textarea
              className="h-24 rounded bg-rosa-claro"
              type="text"
              name="a"
              id=""
              defaultValue="Hola chimu, me gustaria hacerte una pregunta..."
            ></textarea>
          </div>
          <button className="my-6 h-10 w-1/2 rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
