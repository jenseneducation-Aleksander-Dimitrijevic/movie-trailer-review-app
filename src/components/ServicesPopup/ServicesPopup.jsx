import {
  ServicesPopUpContainer,
  ServicesContentContainer,
} from "./ServicesPopupStyled";

import { ServicesList } from "../ServicesPopup/ServicesList";

export const ServicesPopUp = ({ showServicePopUp, servicePopUpNotVisible }) => {
  return (
    <ServicesPopUpContainer onClick={() => servicePopUpNotVisible()}>
      <div className={`servicescontent ${showServicePopUp && "show"}`}>
        <ServicesContentContainer>
          <ServicesList />
        </ServicesContentContainer>
      </div>
    </ServicesPopUpContainer>
  );
};
