import { useLocation } from "react-router-dom";
import { MovieTrailersContainer } from "./MovieTrailersStyled";

export const MovieTrailers = ({ useQuery }) => {
  const location = useLocation();
  const dataFromTopRatedBigPictures = location.state?.data;

  const { isLoading, error, data } = useQuery(
    ["Trailers", dataFromTopRatedBigPictures],
    () =>
      dataFromTopRatedBigPictures
        ? fetch(`/api/movie-trailers/${dataFromTopRatedBigPictures.id}`).then(
            (res) => res.json()
          )
        : null
  );

  console.log(data);

  if (error) return "An error has occurred: " + error.message;

  return (
    <MovieTrailersContainer>
      {data && (
        <>
          {data.map((item) => (
            <>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </>
          ))}
        </>
      )}
    </MovieTrailersContainer>
  );
};
