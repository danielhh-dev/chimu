import { NavLink } from "react-router-dom";

const Item = ({ image, name, price, id }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <img
        src={image}
        alt=""
        className="h-[200px] w-[200px]  md:h-[300px] md:w-[300px] "
      />
      <div className=" w-[160px] pt-8 flex flex-col items-center mx-auto md:w-[300px] text-xl  md:text-xl">
        <p className="text-center">{name}</p>
        <p className="textcenter">{price}ARS</p>
      </div>
    </NavLink>
  );
};

export default Item;
