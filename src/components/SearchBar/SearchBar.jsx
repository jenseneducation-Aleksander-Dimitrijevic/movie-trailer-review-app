import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SearchInput } from "./SearchInput";

import { SearchBarContainer } from "./SearchBarStyled";
import { VscSearch } from "react-icons/vsc";

const queryClient = new QueryClient();

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchBarBig = () => setToggleSearchBar(true);
  const searchBarSmall = () => setToggleSearchBar(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SearchBarContainer>
        <input
          className={toggleSearchBar ? "input-big" : "input-small"}
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
        <SearchInput useQuery={useQuery} />
      </SearchBarContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
