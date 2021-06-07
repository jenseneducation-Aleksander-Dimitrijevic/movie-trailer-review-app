import { SeriesContainer, HeaderSeries } from "./SeriesStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";
import { SeriesCarousel } from "./SeriesCarousel";

export const Series = ({ useQuery }) => {
  return (
    <SeriesContainer>
      <CarouselImages useQuery={useQuery} />
      <HeaderSeries>
        <h1>stream series online</h1>
        <p>
          Find where to watch series online with Watchy - the ultimate guide
          that helps you find the best series and shows across streaming
          services. Create a free account to save your services, Watchlist
          series and shows you want to see, follow friends, and much more!
        </p>
      </HeaderSeries>
      <SeriesCarousel useQuery={useQuery} />
    </SeriesContainer>
  );
};
