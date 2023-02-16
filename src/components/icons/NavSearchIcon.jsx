import { useState, useEffect } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { NavLink } from "react-router-dom";

const NavSearchIcon = (props) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const db = getFirestore();
    const fullCollection = collection(db, "items");

    const dataProducts = await getDocs(fullCollection);
    setProducts(
      dataProducts.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }))
    );
  };

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // filtrado
  const results = !search
    ? products
    : products.filter((product) => product.name.toLowerCase().includes(search));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="  grid-row-1 my-2 mx-auto grid w-[95%] ">
      <div className={props.navBar ? `flex  md:order-2` : "md:hidden"}>
        <div className={`relative  md:block`}>
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            value={search}
            onChange={searcher}
            type="text"
            id="search-navbar"
            className="m-4 block w-full  rounded-3xl bg-rosa-claro p-2 pl-10  text-sm  text-gray-900 placeholder-gray-400 md:w-80"
            placeholder="¿Qué estas buscando?"
          />
          <table className="md:  absolute z-10 ml-6 w-9/12 w-80 border-separate border-spacing-2">
            <tbody>
              {search &&
                results.map((product) => (
                  <tr key={product.id} className="relative mt-6 bg-rosa-claro ">
                    <td className=" rounded-md p-3">
                      <NavLink
                        to={`/detail/${product.id}`}
                        className="flex items-center"
                      >
                        <img src={product.image[0]} className="w-16" alt="" />
                        <p className="ml-8">{product.name}</p>
                      </NavLink>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NavSearchIcon;
