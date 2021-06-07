import { MoviesContainer, HeaderMovies } from "./MoviesStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";
import { MoviesCarousel } from "./MoviesCarousel";

export const Movies = ({ useQuery }) => {
  return (
    <MoviesContainer>
      <CarouselImages useQuery={useQuery} />
      <HeaderMovies>
        <h1>stream movies online</h1>
        <p>
          Find where to watch movies online with Watchy - the ultimate guide
          that helps you find the best movies and shows across streaming
          services. Create a free account to save your services, Watchlist
          movies and shows you want to see, follow friends, and much more!
        </p>
      </HeaderMovies>
      <MoviesCarousel useQuery={useQuery} />
    </MoviesContainer>
  );
};
