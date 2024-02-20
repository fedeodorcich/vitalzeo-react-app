import Slider from "react-slick";
import BannerComponent from "../banner/banner.component";

const EcoComponent = () => {
 

  const imageArray = [
    "./assets/images/eco_1.png",
    "./assets/images/eco_2.jpeg",
    
  ];

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <>
        <div className="mt-10">
          <Slider {...settings}>
            {imageArray.map((imagex, index) => (
                <BannerComponent
                    bannerData={imagex}
                    key={index}/>
                              
            ))}
          </Slider>
        </div>
      
    </>
  );
};

export default EcoComponent;