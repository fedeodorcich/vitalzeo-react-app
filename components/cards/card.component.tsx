const CardComponent = ({product,openAlert}) => {
  return (
    <>
      <div className="rounded-3xl bg-slate-100 p-4 mx-4 mb-3">
        <div className="bg-white m-0 rounded-3xl">
           <img className="rounded-3xl" src={'.'+product.image} alt="" />
        </div>
       
        <h2 className="nunito-bold mt-3">{product.name}</h2>
        <p className="nunito-standard text-2xl mt-2">${product.price}</p >
        <p className="text-green-600 nunito-standard">{product.shipping == 0 ? 'Envio Gratis' : `Envío $ ${product.shipping}`}</p>
        
        <button className="mt-3 rounded-3xl bg-zeo-three px-4 py-2 text-white nunito-bold" onClick={openAlert}>
          Comprar
        </button>
      </div>
    </>
  );
};

export default CardComponent;
