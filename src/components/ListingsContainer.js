import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listingsAry, setListingsAry] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(data => setListingsAry(data));
  }, []);

  function deleteListing (event) {
    const listingId = parseInt(event.target.value);

    const newListingsAry = listingsAry.filter(listing => listing.id !== listingId);
    setListingsAry(newListingsAry);

    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    .catch(error => console.log(error))

  }

  const listingCards = listingsAry.map(listing => {
    return (
      <ListingCard
        key={listing.id}
        listing={listing}
        onClickDelete={deleteListing}
      />
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
