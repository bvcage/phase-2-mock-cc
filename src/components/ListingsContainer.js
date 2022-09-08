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

  function sortListings () {
    const sortedAry = listingsAry.map(listing => listing).sort((a,b) => {
      const aLoc = a.location.toLowerCase();
      const bLoc = b.location.toLowerCase();
      if (aLoc < bLoc) return -1;
      if (aLoc > bLoc) return 1;
      return 0;
    })
    setListingsAry(sortedAry);
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
      <button
        type="button"
        className="sort"
        onClick={sortListings}
        >sort by location
      </button>
      <ul className="cards">
        {listingCards.length > 0 ? listingCards : (<h2>No results.</h2>) }
      </ul>
    </main>
  );
}

export default ListingsContainer;
