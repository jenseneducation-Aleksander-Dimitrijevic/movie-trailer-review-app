import React, { useState } from "react";
import { HeaderLandingPage } from "../../components/HeaderLandingPage/HeaderLandingPage";
import { ServicesPopUp } from "../../components/ServicesPopup/ServicesPopup";
import { HomeContainer } from "./HomeStyled";

export const Home = () => {
  const [showServicePopUp, setShowServicePopUp] = useState(false);

  const servicePopUpVisible = () => setShowServicePopUp(true);
  const servicePopUpNotVisible = () => setShowServicePopUp(false);

  return (
    <HomeContainer>
      {showServicePopUp && (
        <ServicesPopUp
          showServicePopUp={showServicePopUp}
          servicePopUpNotVisible={servicePopUpNotVisible}
        />
      )}
      <HeaderLandingPage servicePopUpVisible={servicePopUpVisible} />
    </HomeContainer>
  );
};
