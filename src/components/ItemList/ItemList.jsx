import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className=" m-auto  flex w-9/12 flex-wrap gap-6  justify-center">
      {products.map((product) => (
        <div  key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
