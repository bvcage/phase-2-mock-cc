import React from "react";
import Search from "./Search";

function Header({ searchVal, onSubmitSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        searchVal={searchVal}
        onSubmitSearch={onSubmitSearch}
      />
    </header>
  );
}

export default Header;
