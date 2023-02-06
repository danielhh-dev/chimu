import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
    <NavLink to={`/detail/${id}`} className="mt-64">
      <img src={image} alt="" />
      <p className="card-text">{name}</p>
      <p className="card-text">{price + 1}</p>
    </NavLink>
  );
};

export default Item;
