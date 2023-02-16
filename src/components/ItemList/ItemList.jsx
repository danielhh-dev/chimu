import Item from "../Item/Item";
import { useState } from "react";

const ItemList = ({ products }) => {
  const [ver, setVer] = useState(false);

  const handleClick = async () => {
    await setVer(!ver);
  };
  return (
    <>
      <section className="grid justify-center">
        <div
          className={`m-auto flex  flex-wrap justify-center gap-6 md:gap-8  ${
            ver ? "h-max" : "h-[840px]"
          } overflow-hidden`}
        >
          {products.map((product) => (
            <div key={product.id}>
              <Item {...product} />
            </div>
          ))}
        </div>
        <button
          className="my-20 mx-auto h-12 w-1/2 rounded-lg bg-color-verde text-white md:col-span-2 md:w-1/4"
          onClick={handleClick}
        >
          {ver ? "Ver menos" : "Ver más"}
        </button>
      </section>
    </>
  );
};

export default ItemList;