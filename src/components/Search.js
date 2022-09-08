import React, { useState } from "react";

function Search({ searchVal, onSubmitSearch }) {

  const [tempSearchVal, setTempSearchVal] = useState(searchVal);

  function handleChange(e) {
    setTempSearchVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitSearch(tempSearchVal);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={tempSearchVal}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
