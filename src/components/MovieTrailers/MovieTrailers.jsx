import { useLocation } from "react-router-dom";
import {
  MovieTrailersContainer,
  MovieTrailersContent,
  CloseButtonContainer,
} from "./MovieTrailersStyled";

import YouTube from "react-youtube";

export const MovieTrailers = ({ showTrailerNotVisible, useQuery }) => {
  const location = useLocation();
  const dataFromTopRated = location.state?.data;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const { isLoading, error, data } = useQuery(
    ["Trailers", dataFromTopRated],
    () =>
      dataFromTopRated &&
      fetch(`/api/movie-trailers/${dataFromTopRated?.id}`).then((res) =>
        res.json()
      )
  );

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
                  <YouTube videoId={`${item?.key}`} opts={opts} />;
                </>
              )
          )}
        </MovieTrailersContent>
      )}
    </MovieTrailersContainer>
  );
};
