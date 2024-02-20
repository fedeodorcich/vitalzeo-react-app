import style from "./whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const WhatsappComponent = () => {
  return (
    <>
      <button className="whatsapp rounded-3xl bg-green-700 fixed bottom-5 right-5 py-3 px-3 md:px-5 z-40">
        <Link href="https://api.whatsapp.com/send?phone=5492644049834&text=Hola,%20quiero%20consultar%20por%20un%20producto%20de%20VitalZEO?">
          <div className="flex align-center text-white">
            <FaWhatsapp className="text-white" size={25} />
            <span className="ml-2 hidden md:block">
              ¿En que podemos ayudarte?
            </span>
          </div>
        </Link>
      </button>
    </>
  );
};

export default WhatsappComponent;
