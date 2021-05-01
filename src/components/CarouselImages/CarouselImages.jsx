import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselContainer, Img } from "./CarouselStyled";
import Spinner from "../Spinner/Spinner";

export const CarouselImages = ({ useQuery }) => {
  const { isLoading, error, data } = useQuery(["TopRatedMoviesImages"], () =>
    fetch("/api/popular/").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

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
        {data &&
          data.map((d) => (
            <div key={d.id}>
              <Img
                src={`http://image.tmdb.org/t/p/w500/${
                  d?.poster_path || d?.backdrop_path
                }`}
                alt="Pictures"
              />
            </div>
          ))}
      </Carousel>
    </CarouselContainer>
  );
};
