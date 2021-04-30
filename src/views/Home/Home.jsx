import React, { useState } from "react";
import { HeaderLandingPage } from "../../components/HeaderLandingPage/HeaderLandingPage";
import { ServicesPopUp } from "../../components/ServicesPopup/ServicesPopup";
import { HomeContainer } from "./HomeStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";

export const Home = () => {
  const [showServicePopUp, setShowServicePopUp] = useState(false);

  const servicePopUpVisible = () => setShowServicePopUp(true);
  const servicePopUpNotVisible = () => setShowServicePopUp(false);

  return (
    <HomeContainer>
      <CarouselImages />
      {showServicePopUp && (
        <ServicesPopUp
          servicePopUpVisible={servicePopUpVisible}
          servicePopUpNotVisible={servicePopUpNotVisible}
        />
      )}
      <HeaderLandingPage servicePopUpVisible={servicePopUpVisible} />
    </HomeContainer>
  );
};
