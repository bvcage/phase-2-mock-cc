import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listingsAry, setListingsAry] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(data => setListingsAry(data));
  }, []);

  const listingCards = listingsAry.map(listing => {
    return (
      <ListingCard listing={listing} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
