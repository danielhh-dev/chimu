import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
    <NavLink to={`/detail/${id}`} >
      <img src={image} alt="" className="w-40" />
      <p className="card-text">{name}</p>
      <p className="card-text">{price + 1}</p>
    </NavLink>
  );
};

export default Item;
