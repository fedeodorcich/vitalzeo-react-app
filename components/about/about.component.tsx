import Image from "next/image";
import NavbarComponent from "../navbar/navbar.component";
import style from "./about.module.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import BannerComponent from "../banner/banner.component";
import LoadingComponent from "../loading/loading.component";

const AboutComponent = () => {
  const [tamanioPantalla, setTamanioPantalla] = useState({
    ancho: typeof window !== "undefined" && window.innerWidth,
    alto: typeof window !== "undefined" && window.innerHeight,
  });

  const [loading, setLoading] = useState(true);
  const [data,setData] = useState<string []>()

  

  const imageArray = [
    "./assets/images/desktop/banner_1_desktop.png",
    "./assets/images/desktop/banner_2_desktop.png",
    "./assets/images/desktop/banner_3_desktop.png",
    "./assets/images/desktop/banner_4_desktop.png",
    "./assets/images/desktop/banner_6_desktop.png",
    "./assets/images/desktop/banner_7_desktop.png",
  ];

  const imageArrayMobile = [
    "./assets/images/mobile/banner_1_mobile.png",
    "./assets/images/mobile/banner_2_mobile.png",
    "./assets/images/mobile/banner_3_mobile.png",
    "./assets/images/mobile/banner_4_mobile.png",
    "./assets/images/mobile/banner_6_mobile.png",
    "./assets/images/mobile/banner_7_mobile.png",
  ];
  useEffect(() => {
    console.log(tamanioPantalla.ancho)
    if (tamanioPantalla.ancho<=450) {
      setData(imageArrayMobile)

      setLoading(false);
    }else{
      setData(imageArray)
      
      setLoading(false);
    }
    console.log(data)
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const getData = () => {
    if (tamanioPantalla.ancho <= 450) {
      return data.map((image, index) => (
        <BannerComponent
          bannerData={image}
          key={index}
        ></BannerComponent>
      ));
    } else {
      return data.map((imagex, index) => (
        <BannerComponent
          bannerData={imagex}
          key={index}
        ></BannerComponent>
      ));
    }
  };

  return (
    <>
      {!loading && (
        <div className="mt-10">
          <Slider {...settings}>
            {getData()}
          </Slider>
        </div>
      )}
    </>
  );
};

export default AboutComponent;