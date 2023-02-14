import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className=" m-auto  flex w-9/12 flex-wrap justify-center  gap-6">
      {products.map((product) => (
        <div key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
