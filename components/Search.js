import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="search icon" onClick={handleSearch} />
      </div>
    </div>
  );
}

export default Search;