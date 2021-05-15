import { useState } from "react";

import { HeaderLandingPage } from "../../components/HeaderLandingPage/HeaderLandingPage";
import { ServicesPopUp } from "../../components/ServicesPopup/ServicesPopup";
import { HomeContainer } from "./HomeStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";
import { TopRated } from "../../components/TopRated/TopRated";
import { TopRatedBigPictures } from "../../components/TopRatedBigPictures/TopRatedBigPictures";
import { MovieTrailers } from "../../components/MovieTrailers/MovieTrailers";

export const Home = ({ useQuery }) => {
  const [showServicePopUp, setShowServicePopUp] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  const servicePopUpVisible = () => setShowServicePopUp(true);
  const servicePopUpNotVisible = () => setShowServicePopUp(false);

  const showTrailerVisible = () => setShowTrailer(true);
  const showTrailerNotVisible = () => setShowTrailer(false);

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
      <TopRatedBigPictures
        useQuery={useQuery}
        showTrailerVisible={showTrailerVisible}
      />
      <TopRated data={data} showTrailerVisible={showTrailerVisible} />
      {showTrailer && (
        <MovieTrailers
          useQuery={useQuery}
          showTrailerNotVisible={showTrailerNotVisible}
        />
      )}
    </HomeContainer>
  );
};
