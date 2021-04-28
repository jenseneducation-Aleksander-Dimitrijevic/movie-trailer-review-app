import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SearchInput } from "./SearchInput";

import { SearchBarContainer } from "./SearchBarStyled";
import { VscSearch } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const queryClient = new QueryClient();

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchBarBig = () => setToggleSearchBar(true);
  const searchBarSmall = () => setToggleSearchBar(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SearchBarContainer>
        {keyword.length > 0 && (
          <VscClose
            style={{
              background: "transparent",
              fontSize: "1.5rem",
              color: "#9daebf",
              position: "absolute",
              right: "4.2em",
              top: "0.5em",
              cursor: "pointer",
            }}
            onClick={(e) => setKeyword("")}
            className={toggleSearchBar ? "showButton" : "hideButton"}
          />
        )}
        <VscSearch
          style={{
            background: "transparent",
            fontSize: "1.3rem",
            color: "#9daebf",
            position: "absolute",
            left: "2em",
            top: "0.7em",
          }}
        />
        <input
          className="searchInput"
          type="text"
          value={keyword}
          placeholder="Search for all movies, actors, reviews etc."
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) =>
            (e.target.placeholder =
              "Search for all movies, actors, reviews etc.")
          }
          onChange={(e) => setKeyword(e.target.value)}
          onClick={() => searchBarBig()}
        />
        <button
          className={toggleSearchBar ? "showButton" : "hideButton"}
          onClick={() => searchBarSmall()}
        >
          Close
        </button>

        <SearchInput
          useQuery={useQuery}
          toggleSearchBar={toggleSearchBar}
          keyword={keyword}
        />
      </SearchBarContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
