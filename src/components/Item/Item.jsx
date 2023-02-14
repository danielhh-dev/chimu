import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <img src={image} alt="" className="h-[220px] w-[220px]" />
      <div className="text-center">
        <p className="card-text">{name}</p>
        <p className="card-text">{price}ARS</p>
      </div>
    </NavLink>
  );
};

export default Item;
