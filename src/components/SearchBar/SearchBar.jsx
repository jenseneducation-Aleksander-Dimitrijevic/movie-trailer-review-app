import { useState } from "react";

import { SearchInput } from "./SearchInput";

import { SearchBarContainer } from "./SearchBarStyled";
import { VscSearch } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

export const SearchBar = ({ useQuery }) => {
  const [keyword, setKeyword] = useState("");
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  const searchBarBig = () => setToggleSearchBar(true);
  const searchBarSmall = () => setToggleSearchBar(false);

  return (
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
      <VscSearch className="search-icon" />
      <input
        className="searchInput"
        type="text"
        value={keyword}
        placeholder="Search across all streaming services"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) =>
          (e.target.placeholder = "Search all across streaming services")
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
  );
};
