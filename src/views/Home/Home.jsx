import React from "react";
import { HeaderLandingPage } from "../../components/HeaderLandingPage/HeaderLandingPage";
import { HomeContainer } from "./HomeStyled";

export const Home = () => {
  return (
    <HomeContainer>
      <HeaderLandingPage />
    </HomeContainer>
  );
};
