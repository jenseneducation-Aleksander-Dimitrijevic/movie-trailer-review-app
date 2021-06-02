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
    <>
      {ServicesData.map((s) => (
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          <IconsContainer key={s.id}>
            <Icons
              src={s.icon}
              alt={s.icon}
              onClick={() => servicePopUpVisible()}
            />
          </IconsContainer>
        </Carousel>
      ))}
    </>
  );
};
