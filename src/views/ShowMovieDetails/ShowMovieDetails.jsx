import ShowMovieContainer from "./ShowMovieStyles";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

export const ShowMovieDetails = ({ location }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [currentID, setCurrentID] = useState(location.data.d.id);

  const baseURL = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    sessionStorage.setItem("__movieID__", currentID);
    if (sessionStorage.getItem("__movieID__"))
      setCurrentID(sessionStorage.getItem("__movieID__"));
    const fetchMovieDetails = async () => {
      const resp = await fetch(`/api/movies/${currentID}`);
      const data = await resp.json();
      setMovieDetail(data);
    };
    fetchMovieDetails();
  }, [currentID]);

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
            <span className="movie-details-overview">
              {movieDetail.release_date.split("-")[0]}
            </span>
          </div>
        </>
      )}
    </ShowMovieContainer>
  );
};
