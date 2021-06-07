import { KidsContainer, HeaderKids } from "./KidsStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";
import { KidsCarousel } from "./KidsCarousel";

export const Kids = ({ useQuery }) => {
  return (
    <KidsContainer>
      <CarouselImages useQuery={useQuery} />
      <HeaderKids>
        <h1>watch kids movies online</h1>
        <p>
          Find where to watch kids movies online with Playpilot - the ultimate
          guide that helps you find the best movies and shows across streaming
          services. Create a free account to save your services, Watchlist
          movies and shows you want to see, follow friends, and much more!
        </p>
      </HeaderKids>
      <KidsCarousel useQuery={useQuery} />
    </KidsContainer>
  );
};
