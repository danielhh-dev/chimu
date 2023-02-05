import ItemList from "../../components/ItemList/ItemList";

const TazasBotellas = ({ products }) => {
  return (
    <>
      <h1>Conocé nuestros productos</h1>
      <ItemList products={productos} />
    </>
  );
};

export default TazasBotellas;
