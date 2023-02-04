import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="estilos para el contenedor de productos">
      {products.map((product) => {
        <div key={product.id}>
          <Item {...product} />
        </div>;
      })}
    </div>
  );
};

export default ItemList;
