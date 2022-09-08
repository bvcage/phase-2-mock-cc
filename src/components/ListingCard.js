import React, { useState } from "react";

function ListingCard({ listing, onClickDelete }) {
  
  const { id, description, image, location } = listing;
  const placeholderImg = "https://via.placeholder.com/300x300";
  const [isFav, setIsFav] = useState(false);

  function toggleIsFav () {
    setIsFav(!isFav);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button
            className="emoji-button favorite active"
            onClick={toggleIsFav}
            >★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={toggleIsFav}
            >☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          value={id}
          onClick={onClickDelete}
          >🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
