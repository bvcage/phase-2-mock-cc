import React, { useEffect, useState } from "react";
// import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listingsAry, setListingsAry] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(data => setListingsAry(data));
  }, []);

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
