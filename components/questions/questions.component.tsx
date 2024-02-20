import { useRouter } from 'next/router';


const QuestionsComponent = () => {

  const router = useRouter();

  return (
    <>
      <div className="bg-zeo-one rounded-3xl mt-20 px-3 py-10">
        <h3 className="text-2xl md:text-4xl nunito-bold text-white mx-5">
          ¿Tenés alguna duda acerca del producto?
        </h3>

        <p className="nunito-light text-white text-lg md:text-2xl my-4 mx-5">
          Si es así podes visitar nuestra sección de preguntas frecuentes
          haciendo click en el siguiente botón
        </p>
        <button
          className="bg-white text-zeo-one text-md md:text-2xl rounded-3xl px-4 py-2 mt-5 nunito-bold mx-5"
          onClick={() => { router.push('/questions');}}
        >
          Preguntas frecuentes
        </button>
      </div>
    </>
  );
};

export default QuestionsComponent;
