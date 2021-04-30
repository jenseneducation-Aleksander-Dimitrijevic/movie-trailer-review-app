import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselData } from "./CarouselData";
import { CarouselContainer, Img } from "./CarouselStyled";

export const CarouselImages = () => {
  return (
    <CarouselContainer>
      <Carousel
        swipeable={true}
        emulateTouch={true}
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={200}
        showIndicators={false}
        className="carousel"
      >
        {CarouselData.map((c) => (
          <div key={c.id}>
            <Img src={c.img} alt={c.name} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};
