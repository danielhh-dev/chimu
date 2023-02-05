import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  console.log(image);
  return (
    <div className="estilos para la card del producto">
      {/* <NavLink to={`/detail/${id}`}> */}
      <img className="w-60" src={image} alt="" />
      <p className="card-text">{name}</p>
      <p className="card-text">{price}</p>
      {/* </NavLink> */}
    </div>
  );
};

export default Item;
