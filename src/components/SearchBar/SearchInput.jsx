import { SearchInputContainer } from "./SearchBarStyled";

export const SearchInput = ({ useQuery }) => {
  const { isLoading, error, data } = useQuery("Movies", () =>
    fetch("/api/popular/").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <SearchInputContainer>
      <section>
        <strong style={{ color: "red" }}>
          {data.map((d) => (
            <div key={d.id}>
              <h1>{d.overview}</h1>
              <img src={d.poster_path} alt={d.poster_path} />
            </div>
          ))}
        </strong>
      </section>
    </SearchInputContainer>
  );
};
