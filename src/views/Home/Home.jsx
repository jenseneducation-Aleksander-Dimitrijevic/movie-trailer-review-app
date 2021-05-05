import { useState } from "react";

import { HeaderLandingPage } from "../../components/HeaderLandingPage/HeaderLandingPage";
import { ServicesPopUp } from "../../components/ServicesPopup/ServicesPopup";
import { HomeContainer } from "./HomeStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";
import { TopRated } from "../../components/TopRated/TopRated";
import { TopRatedBigPictures } from "../../components/TopRatedBigPictures/TopRatedBigPictures";

export const Home = ({ useQuery }) => {
  const [showServicePopUp, setShowServicePopUp] = useState(false);

  const servicePopUpVisible = () => setShowServicePopUp(true);
  const servicePopUpNotVisible = () => setShowServicePopUp(false);

  const { error, data } = useQuery(["TopRatedMovies"], () =>
    fetch("/api/top-rated-movies").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <HomeContainer>
      <CarouselImages useQuery={useQuery} />
      {showServicePopUp && (
        <ServicesPopUp
          servicePopUpVisible={servicePopUpVisible}
          servicePopUpNotVisible={servicePopUpNotVisible}
        />
      )}
      <HeaderLandingPage servicePopUpVisible={servicePopUpVisible} />
      <TopRatedBigPictures useQuery={useQuery} />
      <TopRated data={data} />
    </HomeContainer>
  );
};
