import { ServicesContainer, Icons, IconsContainer } from "./ServicesStyled";
import { ServicesData } from "./ServicesData";

export const Services = () => {
  return (
    <ServicesContainer>
      {ServicesData.map((s) => (
        <IconsContainer key={s.id}>
          <Icons src={s.icon} alt={s.icon} />
        </IconsContainer>
      ))}
    </ServicesContainer>
  );
};
