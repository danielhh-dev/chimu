import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
<<<<<<< HEAD
    <NavLink to={`/detail/${id}`}>
=======
    <NavLink to={`/detail/${id}`} className="mt-64">
>>>>>>> 12f04080c4db16744e7cad5bfd5a8c9cb22e7bba
      <img src={image} alt="" />
      <p className="card-text">{name}</p>
      <p className="card-text">{price + 1}</p>
    </NavLink>
  );
};

export default Item;
