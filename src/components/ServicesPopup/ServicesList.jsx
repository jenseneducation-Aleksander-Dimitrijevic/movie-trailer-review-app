import { ServicesData } from "../Services/ServicesData";
import {
  ServicesIconsContainer,
  ServicesIcons,
  ServicesName,
} from "./ServicesPopupStyled";

export const ServicesList = () => {
  return (
    <>
      {ServicesData.map((s) => (
        <ServicesIconsContainer key={s.id}>
          <ServicesIcons src={s.icon} alt={s.icon} />
          <ServicesName>{s.name}</ServicesName>
        </ServicesIconsContainer>
      ))}
    </>
  );
};
