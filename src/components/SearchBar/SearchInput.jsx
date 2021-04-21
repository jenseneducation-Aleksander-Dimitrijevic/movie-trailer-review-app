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
          <div style={{ marginBottom: "1em" }} key={d.id}>
            <img
              src={`http://image.tmdb.org/t/p/w500/${d.poster_path}`}
              alt={d.poster_path}
            />
            <aside>
              <h5 className="title-text">{d.title}</h5>
              <h5 className="release-text">{d.release_date}</h5>
              <h5>
                <AiFillStar style={{ color: "yellow", marginTop: "2em" }} />{" "}
                {d.vote_average}
              </h5>
              <h5 className="overview-text">{d.overview}</h5>
            </aside>
          </div>
        ))}
      </section>
    </SearchInputContainer>
  );
};
