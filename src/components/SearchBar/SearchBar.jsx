import { useState } from 'react';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <input
      type="text"
      value={keyword}
      placeholder="Search for all movies, actors, reviews etc."
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};
