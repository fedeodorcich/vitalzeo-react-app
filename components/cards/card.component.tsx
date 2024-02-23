const CardComponent = ({product,openAlert}) => {
  return (
    <>
      <div className="rounded-3xl bg-slate-100 p-4 mx-4 mb-3">
        <div className="bg-white m-0 rounded-3xl">
           <img className="rounded-3xl" src={'.'+product.image} alt="" />
        </div>
       
        <h2 className="nunito-bold mt-3">{product.name}</h2>
        <span className="text-green-600 nunito-standard">{product.shipping == 0 ? 'Envio Gratis' : `Envío $ ${product.shipping}`}</span>
        {product.discount!=0 ? (
          <span className="bg-green-500 nunito-standard rounded-3xl text-white px-2 ml-3">{`-${product.discount} %`}</span>
        ) : <br/>}
        <p className="nunito-standard">${product.price}</p>
        <button className="mt-3 rounded-3xl bg-zeo-three px-4 py-2 text-white nunito-bold" onClick={openAlert}>
          Comprar
        </button>
      </div>
    </>
  );
};

export default CardComponent;
