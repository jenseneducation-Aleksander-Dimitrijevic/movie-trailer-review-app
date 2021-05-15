import { useLocation } from "react-router-dom";
import {
  MovieTrailersContainer,
  MovieTrailersContent,
  CloseButtonContainer,
} from "./MovieTrailersStyled";

export const MovieTrailers = ({ showTrailerNotVisible, useQuery }) => {
  const location = useLocation();
  const dataFromTopRated = location.state?.data;

  const { isLoading, error, data } = useQuery(
    ["Trailers", dataFromTopRated],
    () =>
      dataFromTopRated &&
      fetch(`/api/movie-trailers/${dataFromTopRated?.id}`).then((res) =>
        res.json()
      )
  );

  console.log(data);

  if (error) return "An error has occurred: " + error.message;

  return (
    <MovieTrailersContainer>
      {data && (
        <MovieTrailersContent>
          {data.map(
            (item, idx) =>
              idx <= 0 && (
                <>
                  <CloseButtonContainer onClick={() => showTrailerNotVisible()}>
                    &times;
                  </CloseButtonContainer>
                  <iframe
                    src={`https://www.youtube.com/embed/${item?.key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </>
              )
          )}
        </MovieTrailersContent>
      )}
    </MovieTrailersContainer>
  );
};
