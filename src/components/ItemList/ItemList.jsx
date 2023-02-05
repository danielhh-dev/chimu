import Item from "../Item/Item";

const ItemList = ({ props }) => {
  return (
    <div className=" m-auto flex w-9/12 flex-wrap">
      {props.map((product) => (
        <div key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
