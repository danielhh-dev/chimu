/* (VISTA_MOVIL)Originalmente en hidden o podria no llamarlo  -> Esta es la pagina que viene de hacer click en 'Hacer pedido en la pagina Carrito' */

const OrderPage = () => {
  return (
    <section className="hidden">
      <h1 className="my-6 text-center text-3xl">Tu pedido/tus datos</h1>

      <form className="md:mx-50 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:mx-60 ">
        <div className="mb-4 flex w-[90%] flex-col ">
          <label> Nombre y apellido</label>
          <input
            className="h-16 divide-blue-600 rounded-lg bg-rosa-claro"
            type="text"
            name=""
            id=""
            placeholder="hola"
          />
        </div>
        <div className="mb-4 flex  w-[90%]  flex-col">
          <label>Telefono</label>
          <input
            className="h-16 rounded bg-rosa-claro"
            type="text"
            name=""
            id=""
            placeholder="hola"
          />
        </div>
        <div className="mb-4 flex  w-[90%]  flex-col">
          <label> Correo electronico</label>
          <input
            className="h-16 rounded  bg-rosa-claro"
            type="text"
            name=""
            id=""
            placeholder="hola"
          />
        </div>
        <div className="mb-4 flex  w-[90%]  flex-col">
          <label>
            {" "}
            Direccion de envio{" "}
            <span className="text-sm text-gray-400 ">
              (Si preferis un punto de encuentro por favor, indica cual).
            </span>
          </label>
          <input
            className="h-16 rounded bg-rosa-claro"
            type="text"
            name=""
            id=""
            placeholder="hola"
          />
        </div>
        <div className="mb-4 flex  w-[90%]  flex-col md:col-span-2 md:w-[95%]">
          <label> Comentarios</label>
          <textarea
            className="h-24 rounded bg-rosa-claro"
            type="text"
            name=""
            id=""
          >
            asddassdasdasdasdasdasd
          </textarea>
        </div>
        <button className="my-6 h-10 w-1/2 rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/3">
          Hacer pedido
        </button>
        <p className="mb-6 text-gray-400  underline md:col-span-2">
          Seguir comprando
        </p>{" "}
        {/* Podria ser un navLink */}
      </form>
    </section>
  );
};

export default OrderPage;
