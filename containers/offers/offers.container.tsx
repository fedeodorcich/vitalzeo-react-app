import { useEffect, useState } from "react";
import CarouselComponents from "../../components/carousel/carousel.component";
import AlertComponent from "../../components/alert/alert.component";
import productService from "../../core/services/product.service";
import PropertiesComponent from "../../components/properties/properties.component";

const OffersContainer = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [category,setCategory] = useState<string>();
  const [products, setProducts] = useState<any[]>([]);
  const [showAlert,setShowAlert] = useState<boolean>(false)


  useEffect(() => {
    getOffersByType("health", 0); //llamada inicial
  }, []);

  function getOffersByType(category: string, pill: number) {
    setCategory(category);
    productService
      .getOffersData(category)
      .then((data) => {
        if(!data){
          setProducts([])
        }
        setProducts(data);
        setSelectedItem(pill);
      })
      .catch((error) => console.error(error));
  }

  const openAlert = () => {
    setShowAlert(true);
  };

  const closeAlert=()=>{
    setShowAlert(false)
  }




  return (
    <>
      <h3 className="text-3xl nunito-bold text-zeo-three mt-10">Líneas de producción</h3>
      <div className="mt-5">
        <button
          className={`px-4 py-1 rounded-3xl nunito-bold ${
            selectedItem == 0 && "bg-zeo-two text-white"
          }`}
          onClick={() => {
            getOffersByType("health", 0);
          }}
        >
          Línea salud
        </button>
        <button
          className={`px-4 py-1 rounded-3xl nunito-bold ${
            selectedItem == 2 && "bg-zeo-two text-white"
          }`}
          onClick={() => {
            getOffersByType("cosmetic", 2);
          }}
        >
          Línea cosmética
        </button>
        <button
          className={`px-4 py-1 rounded-3xl nunito-bold ${
            selectedItem == 4 && "bg-zeo-two text-white"
          }`}
          onClick={() => {
            getOffersByType("animals", 4);
          }}
        >
          Línea mascotas
        </button>
        <button
        disabled
          className="px-4 py-1 rounded-3xl nunito-bold text-slate-200"
        >
          Línea ecocampo
        </button>
      </div>

      <div className="mt-10">
        
        <CarouselComponents products={products} openAlert={openAlert}/>
        <PropertiesComponent category={category}/>
      </div>

      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>

      <div>
        <AlertComponent showAlert={showAlert} closeAlert={closeAlert}/>
      </div>
    </>
  );
};

export default OffersContainer;
