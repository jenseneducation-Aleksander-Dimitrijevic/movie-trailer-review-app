import {
  TopRatedContainer,
  TopRatedData,
  TopRatedHeader,
} from "../TopRated/TopRatedStyled";

import { AiFillStar } from "react-icons/ai";

export const TopRated = ({ useQuery }) => {
  const { isLoading, error, data } = useQuery(["TopRatedMovies"], () =>
    fetch("/api/top-rated-movies").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <TopRatedContainer>
      {data && (
        <>
          {data.map((d) => (
            <TopRatedData key={d.id}>
              <img
                src={`http://image.tmdb.org/t/p/w500/${
                  d?.poster_path || d?.backdrop_path
                }`}
                alt={d?.poster_path || d?.backdrop_path}
              />
              <aside>
                <h5 className="title-text">{d?.title || d?.name}</h5>
                <h5 className="release-text">
                  {d?.release_date.substr(0, 4) ||
                    d?.first_air_date.substr(0, 4)}
                </h5>
                <h5>
                  <AiFillStar
                    style={{
                      color: "yellow",
                    }}
                  />{" "}
                  {d?.vote_average}
                </h5>
                <h5 className="overview-text">
                  {d?.overview?.length > 200
                    ? d?.overview.substr(0, 200) + "..."
                    : d?.overview}
                </h5>
              </aside>
            </TopRatedData>
          ))}
        </>
      )}
    </TopRatedContainer>
  );
};
