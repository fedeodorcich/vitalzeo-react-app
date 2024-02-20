import { useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

const InfoComponent = () => {

  const [showInfo,setShowInfo]=useState<boolean>(false);

  const infoItems = [
    "Habilidad para intercambiar cationes. (metales pesados como Plomo, cadmio, etc.) Un catión sale de la estructura microporosa y otro lo sustituye.",
    "La medida Standard de esta habilidad es la Capacidad de Intercambio Catiónico o CIC.",
    "Alta capacidad de absorción de agua (hidrofílicas).",
    "Baja densidad y un gran volumen de canales vacíos cuando se deshidrata.",
    "La estabilidad de su estructura cristalina cuando se deshidrata.",
    "Habilidad de absorber gases y vapores."
  ]
  return (
    <>
    
      <div className="mt-10 pt-5 mx-auto">
      {!showInfo && (
        <button
          className="bg-zeo-three text-white text-md md:text-2xl rounded-3xl px-4 py-2 mt-5 nunito-bold"
          onClick={() => {
            setShowInfo(true);
          }}
        >
          Propiedades de la roca zeolítica
        </button>
      )}

      {
        showInfo && (
          <> <h2 className="nunito-bold text-3xl text-zeo-one mb-5">Propiedades de la roca Zeolítica</h2>
          <ul className="list-none text-zeo-one nunito-standard text-lg md:text-2xl">
        {
            infoItems.map((item, index) => (

                <li key={index} className="mb-4 flex items-center">
                    <div className="w-5 h-5">
                      <FaRegDotCircle className="text-zeo-one" size={20}/>
                    </div><span className="ml-3">{item}</span>
                </li>     
            ))
        }
        </ul>
          </>
         
        )

      }
      
      </div>
    </>
  );
};

export default InfoComponent;
