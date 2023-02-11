import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className=" flex flex-wrap gap-8 items-center justify-between">
      {products.map((product) => (
        <div  key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
