import ChimuIcon from "../../components/icons/ChimuLogoIcon";
import NavBar from "../../components/navbar/MainNavBar";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <section className=" mx-8 md:mx-auto grid grid-cols-1 items-center justify-center text-xl md:h-screen  ">
        <div className="hidden md:mx-auto md:flex">
          <ChimuIcon />
        </div>
        <h1 className="mt-4 mb-4 text-center text-2xl font-bold md:mb-0 ">
          Sobre mi
        </h1>
        <div className="md:mx-44 md:mb-8 text-[18px] ">
          <p className="pb-4 font-[500]   md:pb-0">
            Chimu es un emprendimiento que comenzó en el sueño de Jessica y que
            se hizo realidad en el 2022.
          </p>
          <p className="pb-4 font-[500]  ">
            Brindamos servicio de diseño personalizado de tazas, chopp, remeras,
            kit escolar, eventos como cumpleaños y más. Los productos se
            personalizan mediante sublimación y vinilo para ofrecer a los
            clientes una experiencia única junto a sus seres queridos.
          </p>
          <p className="pb-4 font-[500] ">
            Una de nuestras características más importantes es que ofrecemos un
            excelente servicio y calidad en nuestros productos.
          </p>
          <p className="pb-4 font-[500]  ">
            Nuestra misión es que disfrutes de nuestros productos personalizados
            para compartirlo con otros o con vos mismo.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
