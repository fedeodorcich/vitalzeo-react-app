import { useEffect, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";

const PropertiesComponent = ({ category }) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const propertiesItems = {
    health: [
      "Desintoxicante, Elimina del cuerpo metales pesados y toxinas.",
      "Revitalizante, Obtenemos mayor energía.",
      "Inmunizante, Reforzamos el sistema inmunológico y la salud.",
      "Anticancerígeno, Se reduce el riesgo de padecer cáncer.",
    ],
    cosmetic: [
      "Hidrata en profundidad.",
      "Piel más luminosa, mejora la circulación de la piel.",
      "Combate el acné debido a sus propiedades antibacterianas.",
      "Elimina residuos, hace una limpieza en profundidad de la piel.",
      "Es antienvejecimiento gracias a sus propiedades de desintoxicación.",
    ],
    animals: [
        "Elimina toxinas",
        "Mejora la salud de tu mascota",
        "Favorece la correcta asimilación de los alimentos",      
    ],
    aquarius:[
      "Absorbe el amoníaco del agua",
      "Filtra el agua evitando la formación de bacterias",
      "Elimina sustancias químicas",  
    ]
     
  };

  useEffect(() => {
    setShowInfo(false);
  }, [category]);

  return (
    <>
      {!showInfo && (
        <button
          className="bg-zeo-three text-white text-md md:text-2xl rounded-3xl px-4 py-2 mt-5 nunito-bold"
          onClick={() => {
            setShowInfo(true);
          }}
        >
          Ver Propiedades
        </button>
      )}

      {showInfo && (
        <div className="p-10 rounded-3xl bg-zeo-three mt-10">
          <div className="flex justify-between">
          <h3 className="nunito-bold text-3xl text-zeo-two my-2">Propiedades</h3>
            <button
              className="text-white text-md md:text-xl  nunito-standard"
              onClick={() => {
                setShowInfo(false);
              }}
            >
              Ocultar
            </button>
          </div>

          <div className="py-5 md:flex">
            <div>
              {
                category=='animals' && (<h3 className="nunito-bold text-2xl text-zeo-two my-2">Mascotas</h3>)
              }
              <ul className="list-none text-zeo-two nunito-standard text-sm md:text-xl">
                {
                  propertiesItems[category].map((item, index) => (
                    <li className="mb-4 flex items-center" key={index}>
                      <div className="w-5 h-5">
                        <FaRegDotCircle className="text-zeo-two" size={15} />
                      </div>
                      <span className="ml-3">{item}</span>
                    </li>
                  ))
                }
              </ul>
              {
                category=='animals' && (
                  <>
                  <h3 className="nunito-bold text-2xl text-zeo-two my-2">Acuario</h3>
                  <ul className="list-none text-zeo-two nunito-standard text-sm md:text-xl">
                {
                  propertiesItems.aquarius.map((item, index) => (
                    <li className="mb-4 flex items-center" key={index}>
                      <div className="w-5 h-5">
                        <FaRegDotCircle className="text-zeo-two" size={15} />
                      </div>
                      <span className="ml-3">{item}</span>
                    </li>
                  ))
                }
              </ul>
                  </>
                  
                )
              }
                
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertiesComponent;
