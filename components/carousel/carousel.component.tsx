import CardComponent from "../../components/cards/card.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponents = ({ products, openAlert}) => {

  const settings = {
    infinite: products.length < 4 ? false : true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
    {
      products.length>0 ? (
        <Slider {...settings}>
        {products?.map((product: any, index: number) => (
          <div key={index}>
            <CardComponent product={product} openAlert={openAlert}/>
          </div>
        ))}
      </Slider>
      ):(<span>{products}</span>)
    }
      
    </>
  );
};

export default CarouselComponents;
