const InfoComponent = () => {
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
        <h3 className="text-teal-500 nunito-bold font-semibold text-3xl mb-8">Propiedades de la roca zeolítica</h3>
      <ul className="list-none text-teal-500 nunito-standard font-semibold text-2xl">
        {
            infoItems.map((item, index) => (

                <li key={index} className="mb-4 flex">
                    <img src="../../assets/icons/whatsapp.svg" width={25} height={25}></img>
                    <span className="ml-3">{item}</span>
                </li>     
            ))
        }
        </ul>
      </div>
    </>
  );
};

export default InfoComponent;
