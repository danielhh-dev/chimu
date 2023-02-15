import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <img
        src={image}
        alt=""
        className="h-[160px] w-[160px]  md:h-[300px] md:w-[300px] "
      />
      <div className=" w-[160px] pt-8 text-center text-sm md:w-[300px]  md:text-2xl">
        <p className="card-text">{name}</p>
        <p className="card-text">{price}ARS</p>
      </div>
    </NavLink>
  );
};

export default Item;
