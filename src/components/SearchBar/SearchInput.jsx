import { SearchInputContainer } from "./SearchBarStyled";
import { AiFillStar } from "react-icons/ai";

export const SearchInput = ({ useQuery, toggleSearchBar }) => {
  const { isLoading, error, data } = useQuery("Movies", () =>
    fetch("/api/popular/").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <SearchInputContainer>
      <section className={toggleSearchBar ? "input-big" : "input-small"}>
        <h1>Popular searches</h1>
        {data.map((d) => (
          <div
            style={{
              marginBottom: "1em",
            }}
            key={d.id}
          >
            <img
              src={`http://image.tmdb.org/t/p/w500/${d.poster_path}`}
              alt={d.poster_path}
            />
            <aside>
              <h5 className="title-text">{d.title}</h5>
              <h5 className="release-text">{d.release_date}</h5>
              <h5>
                <AiFillStar
                  style={{
                    color: "yellow",
                  }}
                />{" "}
                {d.vote_average}
              </h5>
              <h5 className="overview-text">
                {d.overview.length > 200
                  ? d.overview.substr(0, 200) + "..."
                  : d.overview}
              </h5>
              <div style={{ display: "flex" }}>
                <h6 style={{ marginRight: "5px" }}>
                  Language: <span>{d.original_language}</span>
                </h6>
                <h6>
                  Popularity: <span>{d.popularity}</span>
                </h6>
              </div>
            </aside>
          </div>
        ))}
      </section>
    </SearchInputContainer>
  );
};
