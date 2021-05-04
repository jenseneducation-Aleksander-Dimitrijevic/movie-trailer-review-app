import React from "react";
import {NotFoundContainer, Cloud, Mandown} from './NotFound.styles';

export const NotFound = () => {  
  return (
    <NotFoundContainer>
      <Cloud></Cloud>
      <h1>404</h1>
      <h2>This page was lost in space</h2>
      <p>Eller klicka på några av våra mest populära funktioner</p>
      <Mandown></Mandown>
    </NotFoundContainer>
  );
};
