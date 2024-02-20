import { useRouter } from "next/router";
import { useState } from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

const QuestionsContainer = () => {

  const router = useRouter();

  const [questionActive,setQuestionActive] = useState<number>(-1)

  const questionsArray = [
    {
      question: "¿De cuánto es el envase de presentación de Vital Zeo?",
      answer: "Vital Zeo se presenta en pote de 110 grs.",
    },
    {
      question: "¿Hacen envíos a todo el país?",
      answer:
        "La empresa realiza  envíos a todo el país a través de Correo Argentino salvo que se solicite otro medio. ",
    },
    {
      question: "¿Cuáles son los medios de pagos habilitados?",
      answer:
        "Los medios de pagos habilitados actualmente por Vital Zeo,  son Transferencia Bancaria o Mercado Pago. De acuerdo a la modalidad elegida por el comprador enviamos CBU o Link de pago respectivamente.",
    },
    {
      question: "¿Cuánto demora en llegar?",
      answer:
        "Dependiendo del lugar de destino lo normal es de 4 a 5 días hábiles.",
    },
    {
      question: "¿Hay folletería disponible del producto de Vital Zeo?",
      answer: "Vital Zeo en cada envío  incluye folletería explicativa.",
    },
    {
      question: "¿Cómo se consume Vital Zeo?",
      answer:
        "El mineral se disuelve en un vaso de agua, se revuelve por unos segundos y ya está apto para ser ingerido.",
    },
    {
      question: "¿Cuántos gramos diarios de Vital Zeo se consume?",
      answer:
        "Se sugiere 2 cucharaditas diarias de té (evitando el metal), una en ayunas y otra antes de dormir para completar el ciclo diurno y nocturno. Aproximadamente 2 gramos cada cucharita.",
    },
    {
      question: "¿Cuánto dura un pote de Vital Zeo?",
      answer: "El pote dura aproximadamente 28 días con la dosis recomendada.",
    },
    {
      question: "¿Por Cuánto tiempo se toma Vital Zeo?",
      answer:
        "Es un producto inocuo, no produce acostumbramiento, por lo que se puede tomar indefinidamente. Por otro lado el proceso de contaminación es continuo, cuando ingerimos verdura (que poseen herbicida o plaguicidas), el agua, otros alimentos, etc.",
    },
    {
      question: "¿Tiene fecha de vencimiento Vital Zeo?",
      answer:
        "El mineral está en un 100%  natural, sin sustancia químicas, ni orgánicas que puedan alterarlo, por lo que podemos afirmar que no tiene vencimiento.",
    },
    {
      question: "¿Qué significa Zeolita Clinoptilolita Micronizada?",
      answer:
        "Hay una variedad grande de Zeolitas que varía su composición química conforme a sus formaciones geológicas, la única apta para consumo humano es la Clinoptilolita. Micronizado es el proceso de reducir el tamaño a partículas del mineral  a micrón (el milímetro dividido en 1000).",
    },
    {
      question: "¿Cuántas micras tiene la zeolita de Vital Zeo?",
      answer:
        "Los estudios granulométricos realizados certifican que tienen un 98% menor a 16 micras.",
    },
    {
      question: "¿Qué significa zeolita Vital Zeo activada?",
      answer:
        "Es un proceso térmico por la que hace transitar la empresa a  la zeolita, para alcanzar su mayor poder de absorción.",
    },
    {
      question:
        "¿Sirve zeolita Vital Zeo para eliminar metales pesados del organismo?",
      answer:
        "La carga iónica negativa del mineral actúa como imán  de metales pesado capturándolos dentro de su estructura molecular y posteriormente es eliminado junto con la zeolita, quedando el cuerpo liberado de los metales pesado y del mineral. ",
    },
    {
      question: "¿Se puede mezclar zeolita Vital Zeo con café, té o licuados?",
      answer:
        "No existe incompatibilidad del mineral con cualquier sustancia licuosa para su disolución. ",
    },
    {
      question: "¿Zeolita Vital Zeo es libre de gluten?",
      answer:
        "Vital Zeo es mineral 100% puro, no contiene ningún químico, ni sustancia orgánica que pueda afectar a celiacos.",
    },
    {
      question: "¿Tiene alguna contraindicación zeolita Vital Zeo?",
      answer:
        "Las únicas contraindicaciones que tiene el mineral son en el caso de ingerir medicación con contenido de Litio o en tratamiento de quimioterapia, porque en ambos casos el efecto buscado con esas medicaciones se verá neutralizado por la acción quelante del mineral.",
    },
    {
      question: "¿Cuál es la venta mínima al por mayor de zeolita Vital Zeo?",
      answer:
        "No indicamos cantidad mínimas, buscamos el camino de acompañar en la iniciativa del emprendimiento y a tal efecto enviamos alternativas de bonificaciones especiales de acuerdo a la cantidad solicitada.",
    },
    {
      question: "¿Entregan factura A?",
      answer:
        "La empresa se encuentra en el régimen impositivo de responsables inscriptos por lo que estamos habilitados para extender facturas A y B de acuerdo a la condición del comprador. ",
    },
  ];

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-4 mb-10">
        <div className="bg-zeo-two rounded-3xl mt-20 px-3 py-10">
          <div className="flex items-center mx-5">
            <button  onClick={() => { router.push('/');}}>
              <FaCircleChevronLeft className="text-white text-3xl mr-5"/>
            </button>
            
            <h3 className="text-2xl md:text-4xl nunito-bold text-white">
              Preguntas frecuentes
            </h3>
          </div>

          <div className="mx-5">
              {
                questionsArray.map((item,index)=>(
                  <div className="my-4 text-white" key={index}>
                    <div className="bg-zeo-three py-3 px-5 rounded-t-3xl nunito-bold">
                      {item.question}
                    </div>
                    <div className="bg-zeo-four py-3 px-5 rounded-b-3xl nunito-standard">{item.answer}</div>
                  </div>
                ))
              }
          </div>
          
        </div>
      </div>
    </>
  );
};

export default QuestionsContainer;
