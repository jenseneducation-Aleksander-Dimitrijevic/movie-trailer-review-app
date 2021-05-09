import ShowMovieContainer from "./ShowMovieStyles";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

export const ShowMovieDetails = ({ location }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const baseURL = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const resp = await fetch(`/api/movies/${location.data.item.id}`);
      const data = await resp.json();
      setMovieDetail(data);
    };
    fetchMovieDetails();
  }, [location.data.item.id]);

  return (
    <ShowMovieContainer>
      {movieDetail && (
        <>
          <div className="backdrop-container">
            <img
              className="backdrop-image"
              src={`${baseURL}${movieDetail.backdrop_path}`}
              alt={movieDetail.original_title}
            />
          </div>
          <div className="movie-details">
            <div className="movie-details-rating">
              <AiFillStar className="movie-details-rating-star" />
              <span className="movie-details-rating-number">
                {movieDetail.vote_average}
              </span>
            </div>
            <h1 className="movie-details-title">{movieDetail.title}</h1>
            <span className="movie-details-release">
              {movieDetail.release_date.split("-")[0]}
            </span>
            <p className="movie-details-overview">{movieDetail.overview}</p>
          </div>
        </>
      )}
    </ShowMovieContainer>
  );
};
