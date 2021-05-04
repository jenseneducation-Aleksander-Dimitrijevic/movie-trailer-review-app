import {
  ServicesPopUpContainer,
  TextContainer,
  ServicesPopUpContent,
  CloseButtonContainers,
} from "./ServicesPopupStyled";

import { ServicesList } from "../ServicesPopup/ServicesList";

export const ServicesPopUp = ({ servicePopUpNotVisible }) => {
  return (
    <ServicesPopUpContainer>
      <ServicesPopUpContent>
        <TextContainer>
          <CloseButtonContainers onClick={servicePopUpNotVisible}>
            &times;
          </CloseButtonContainers>
          <h1>
            My Services <span>What do you want to discover?</span>
          </h1>
        </TextContainer>
        <ServicesList />
      </ServicesPopUpContent>
    </ServicesPopUpContainer>
  );
};
