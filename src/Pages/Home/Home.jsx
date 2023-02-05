import MainSlider from "../../components/MainSlider/MainSlider";
import ItemList from "../../components/ItemList/ItemList";
import NavSearchIcon from "../../components/icons/NavSearchIcon";

const Home = ({ products }) => {
  console.log(products, "desde Home"); //no recibe props
  return (
    <div>
      <NavSearchIcon navBar={false} />
      <MainSlider />
      {/* <ItemList products={products} /> */}
    </div>
  );
};

export default Home;
