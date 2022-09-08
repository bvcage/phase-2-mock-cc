import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchVal }) {

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

  const filteredListings = listingsAry.filter(listing => listing.description.includes(searchVal));
  const listingCards = filteredListings.map(listing => {
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
        {listingCards.length > 0 ? listingCards : (<h2>No results.</h2>) }
      </ul>
    </main>
  );
}

export default ListingsContainer;
