import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { cardsSelector, cardIdSelector } from "./cardsSlice";

export default function Card({ id }) {
  // Grab all the cards in state
  const cards = useSelector(cardsSelector);
  // Access the specific card we want
  const card = cardIdSelector(cards, id);
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
