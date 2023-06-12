import { useState } from "react";


const QuestionsComponent = ()=>{
    return(
      <>
        <div className="bg-teal-300 rounded-3xl mt-20 px-3 py-10">
          <h3>¿Tenés alguna duda acerca del producto?</h3>
          <p>
            Si es así podes visitar nuestra sección de preguntas frecuentes
            haciendo click en el siguiente botón
          </p>
          <button>Ver Propiedades</button>
        </div>
      </>
  );
}

export default QuestionsComponent;