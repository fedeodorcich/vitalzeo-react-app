import { useState } from "react";
import { FaBullseye } from "react-icons/fa6";

const AlertComponent = ({ showAlert ,closeAlert}) => {
  const [showPopover, setShowPopover] = useState<boolean>(true);

  return (
    <>
      {showAlert && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 "></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 mx-5 animate-fade-up animate-once animate-duration-300 animate-ease-in">
            <div className="bg-white rounded-lg p-6 w-96">
              <h3 className="nunito-bold text-2xl mb-5">Comprar</h3>

              <p className="bg-slate-200 text-slate-600 rounded-xl px-3 py-3 my-2">
                CBU:{" "}
                <span className="text-slate-600 ">0170471020000000080606</span>
              </p>
              <p className="bg-slate-200 text-slate-600 rounded-xl px-3 py-3 my-2">
                Alias: <span className="text-slate-600 ">danielpunazzo.mp</span>
              </p>
              <p className="bg-slate-200 text-slate-600 rounded-xl px-3 py-3 my-2">
                Nombre:{" "}
                <span className="text-slate-600 ">Daniel Felipe Punazzo </span>
              </p>
              <p className="bg-slate-200 text-slate-600 rounded-xl px-3 py-3 my-2">
                Email:{" "}
                <span className="text-slate-600 ">
                  comercial@vitalzeo.com.ar
                </span>
              </p>

              <p className="mb-4">
                Una vez realizada la transferencia, enviar el comprobante a
                comercial@vitalzeo.com.ar los siguientes datos
              </p>

             

              {showPopover && (
                <div className="popover rounded-xl bg-zeo-three p-3">
                  <ul>
                    <li className="flex items-center">
                      <FaBullseye
                        className="mr-2 flex align-center text-zeo-two"
                      
                      />{" "}
                      <span className="py-0 text-zeo-two">Nombre y Apellido</span>
                    </li>
                    <li className="flex items-center">
                      <FaBullseye className="mr-2 text-zeo-two" />{" "}
                      <span className="py-0 text-zeo-two">Dirección de entrega</span>
                    </li>
                    <li className="flex items-center">
                      <FaBullseye className="mr-2 text-zeo-two" />{" "}
                      <span className="py-0 text-zeo-two">Teléfono</span>
                    </li>
                    <li className="flex items-center">
                      <FaBullseye className="mr-2 text-zeo-two" />{" "}
                      <span className="py-0 text-zeo-two">Comprobante de pago</span>
                    </li>
                  </ul>
                </div>
              )}

              <button className="mt-3 rounded-3xl bg-zeo-two px-4 py-2 text-white nunito-bold" onClick={closeAlert}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
