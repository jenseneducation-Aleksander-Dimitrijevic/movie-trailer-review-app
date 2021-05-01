import React, { useState } from "react";
import { HeaderLandingPage } from "../../components/HeaderLandingPage/HeaderLandingPage";
import { ServicesPopUp } from "../../components/ServicesPopup/ServicesPopup";
import { HomeContainer } from "./HomeStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";

export const Home = ({ useQuery }) => {
  const [showServicePopUp, setShowServicePopUp] = useState(false);

  const servicePopUpVisible = () => setShowServicePopUp(true);
  const servicePopUpNotVisible = () => setShowServicePopUp(false);

  const { isLoading, error, data } = useQuery(["TopRatedMovies"], () =>
    fetch("/api/movie-trailers/").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <HomeContainer>
      {/* <CarouselImages /> */}
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
