import { ServicesData } from "../Services/ServicesData";
import {
  ServicesIconsContainer,
  ServicesIcons,
  ServicesName,
  SubscriberText,
} from "./ServicesPopupStyled";

export const ServicesList = () => {
  return (
    <>
      <SubscriberText>Subscriptionservices:</SubscriberText>
      {ServicesData.map((s) => (
        <ServicesIconsContainer key={s.id}>
          <ServicesIcons src={s.icon} alt={s.icon} />
          <ServicesName>{s.name}</ServicesName>
        </ServicesIconsContainer>
      ))}
    </>
  );
};
