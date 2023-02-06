import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  console.log(image);
  return (
    <NavLink to={`/detail/${id}`}>
      <img src={image} alt="" />
      <p className="card-text">{name}</p>
      <p className="card-text">{price}</p>
    </NavLink>
  );
};

export default Item;
