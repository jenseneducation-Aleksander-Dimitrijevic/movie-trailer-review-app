import { DocumentaryContainer, HeaderDocumentary } from "./DocumentaryStyled";
import { CarouselImages } from "../../components/CarouselImages/CarouselImages";
import { DocumentaryCarousel } from "./DocumentaryCarousel";

export const Documentary = ({ useQuery }) => {
  return (
    <DocumentaryContainer>
      <CarouselImages useQuery={useQuery} />
      <HeaderDocumentary>
        <h1>watch documentary movies online</h1>
        <p>
          Find where to watch Documentary movies online with Playpilot - the
          ultimate guide that helps you find the best movies and shows across
          streaming services. Create a free account to save your services,
          Watchlist movies and shows you want to see, follow friends, and much
          more!
        </p>
      </HeaderDocumentary>
      <DocumentaryCarousel useQuery={useQuery} />
    </DocumentaryContainer>
  );
};
