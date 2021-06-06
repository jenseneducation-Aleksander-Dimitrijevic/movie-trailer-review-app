import { ServicesContainer, Icons, IconsContainer } from "./ServicesStyled";
import { ServicesData } from "./ServicesData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Services = ({ servicePopUpVisible }) => {
  return (
    <ServicesContainer>
      {ServicesData.map((s) => (
        <IconsContainer key={s.id}>
          <Icons
            src={s.icon}
            alt={s.icon}
            onClick={() => servicePopUpVisible()}
          />
        </IconsContainer>
      ))}
    </ServicesContainer>
  );
};
