import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [searchVal, setSearchVal] = useState('');

  function handleSearchSubmit (submitVal) {
    setSearchVal(submitVal);
  }

  return (
    <div className="app">
      <Header
        searchVal={searchVal}
        onSubmitSearch={handleSearchSubmit}
      />
      <ListingsContainer
        searchVal={searchVal}
      />
    </div>
  );
}

export default App;
