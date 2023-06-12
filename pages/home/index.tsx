import React from "react";
import NavbarComponent from "../../components/navbar/navbar.component";
import AboutComponent from "../../components/about/about.component";
import WhatsappComponent from "../../components/whatsapp/whatsapp.component";
import Image from "next/image";
import InfoComponent from "../../components/info/info.component";
import QuestionsComponent from "../../components/questions/questions.component";

const HomeComponent: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl">
        <AboutComponent />
        <InfoComponent />
        <QuestionsComponent/>
        <WhatsappComponent />
      </div>
    </>
  );
};

export default HomeComponent;
