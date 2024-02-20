import React from "react";
import AboutComponent from "../../components/about/about.component";
import WhatsappComponent from "../../components/whatsapp/whatsapp.component";
import InfoComponent from "../../components/info/info.component";
import QuestionsComponent from "../../components/questions/questions.component";
import OffersContainer from "../../containers/offers/offers.container";
import FooterComponent from "../../components/footer/footer.component";
import FacebookComponent from "../../components/facebook/facebook.component";
import LoadingComponent from "../../components/loading/loading.component";
import PropertiesComponent from "../../components/properties/properties.component";
import EcoComponent from "../../components/eco/eco.component";

const HomeComponent: React.FC = () => {
  return (
    <>
      
      <div className="container mx-auto max-w-screen-xl px-4">
        <img src="./assets/images/logo.png" className="mt-10  md:w-1/4"/>
        <AboutComponent />
        <InfoComponent />
        <QuestionsComponent/>
        <WhatsappComponent />
        <OffersContainer/>
        <EcoComponent/>
        <FacebookComponent/>
        <FooterComponent/>
      </div>
    </>
  );
};

export default HomeComponent;
