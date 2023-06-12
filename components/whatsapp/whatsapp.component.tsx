const WhatsappComponent = () => {
  return (
    <>
      <button className="whatsapp rounded-3xl bg-green-700 fixed bottom-5 right-5 py-3 px-5">
        <div className="flex align-center">
          <img src="../../assets/icons/whatsapp.svg" width={25} height={25}></img>
          <span className="ml-2">¿En que podemos ayudarte?</span>
        </div>
      </button>
    </>
  );
};

export default WhatsappComponent;
