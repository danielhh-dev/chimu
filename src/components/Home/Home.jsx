import MainSlider from "../MainSlider/MainSlider";
import ItemList from "../ItemList/ItemList";
import NavSearchIcon from "../icons/NavSearchIcon";

const Home = (products) => {
  console.log(products);
  return (
    <div>
      <NavSearchIcon navBar={false} />
      <MainSlider />
      <ItemList props={products} />
    </div>
  );
};

export default Home;
