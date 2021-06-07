import { Link } from "react-router-dom";
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
          data.map((item) => (
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `/show/${item?.name || item?.title}`,
                data: {
                  item,
                },
              }}
              key={item.id}
            >
              <div
                style={{
                  marginBottom: "1em",
                }}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w1280/${
                    item?.poster_path || item?.backdrop_path
                  }`}
                  alt={item?.poster_path || item?.backdrop_path}
                />
                <aside>
                  <h5 className="title-text">{item?.title || item?.name}</h5>
                  <h5 className="release-text">
                    {item?.release_date || item?.first_air_date}
                  </h5>
                  <h5>
                    <AiFillStar
                      style={{
                        color: "yellow",
                      }}
                    />{" "}
                    {item?.vote_average}
                  </h5>
                  <h5 className="overview-text">
                    {item?.overview?.length > 200
                      ? item?.overview.substr(0, 200) + "..."
                      : item?.overview}
                  </h5>
                  <div style={{ display: "flex" }}>
                    <h6 style={{ marginRight: "5px" }}>
                      Language: <span>{item?.original_language}</span>
                    </h6>
                    <h6>
                      Popularity: <span>{item?.popularity}</span>
                    </h6>
                    {item?.media_type && (
                      <h6 style={{ marginLeft: "5px" }}>
                        Type: <span>{item?.media_type}</span>
                      </h6>
                    )}
                  </div>
                </aside>
              </div>
            </Link>
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
