import Image from "next/image";
import NavbarComponent from "../navbar/navbar.component";
import style from "./about.module.css";

const AboutComponent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 bg-teal-600 rounded-3xl mt-7 px-3 py-10 overflow-hidden relative">
        <h1 className="nunito-bold text-5xl text-white">VitalZEO</h1>
        <div className="col-span-3"></div>

        <div className="container mx-auto max-w-screen-lg mt-7 pl-8 col-span-2">
          <p className="nunito-light text-2xl text-white text-4xl nunito-bold">
            Nos especializamos en la venta de minerales cuidadosamente
            seleccionados para brindar beneficios significativos a nuestros
            clientes.
          </p>
        </div>
        <div className="">
          
          <Image
            src={"/assets/images/product.png"}
            width={300}
            height={300}
            alt="zeolita"
            className={style.imageAbout}
          />
        </div>
        <div className={style.element + " bg-teal-200"}></div>
        <div className={style.miniElement + " bg-teal-100"}></div>
      </div>
    </>
  );
};

export default AboutComponent;
