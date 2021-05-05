import { Link } from "react";
import { SearchInputContainer } from "./SearchBarStyled";
import { AiFillStar } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";

export const SearchInput = ({ useQuery, toggleSearchBar, keyword }) => {
  const { isLoading, error, data } = useQuery(["Movies", keyword], () =>
    keyword?.length > 0
      ? fetch(`/api/search/${keyword}`).then((res) => res.json())
      : fetch("/api/popular/").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <SearchInputContainer>
      <section className={toggleSearchBar ? "input-big" : "input-small"}>
        {keyword?.length > 0 ? (
          <>
            <h1>Movies, Series and Actors</h1>
          </>
        ) : (
          <h1>Popular searches</h1>
        )}
        {data?.length > 0 ? (
          data.map((d) => (
            <div
              style={{
                marginBottom: "1em",
              }}
              key={d.id}
            >
              <img
                src={`http://image.tmdb.org/t/p/w1280/${
                  d?.poster_path || d?.backdrop_path
                }`}
                alt={d?.poster_path || d?.backdrop_path}
              />
              <aside>
                <h5 className="title-text">{d?.title || d?.name}</h5>
                <h5 className="release-text">
                  {d?.release_date || d?.first_air_date}
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
                <div style={{ display: "flex" }}>
                  <h6 style={{ marginRight: "5px" }}>
                    Language: <span>{d?.original_language}</span>
                  </h6>
                  <h6>
                    Popularity: <span>{d?.popularity}</span>
                  </h6>
                  {d?.media_type && (
                    <h6 style={{ marginLeft: "5px" }}>
                      Type: <span>{d?.media_type}</span>
                    </h6>
                  )}
                </div>
              </aside>
            </div>
          ))
        ) : (
          <>
            {isLoading === true && <Spinner color="#f26077" />}
            {data?.length === 0 && (
              <h5 className="title-text" style={{ color: "#fff" }}>
                Unfortunately we couldn't find any titles that matches your
                search
              </h5>
            )}
          </>
        )}
      </section>
    </SearchInputContainer>
  );
};
