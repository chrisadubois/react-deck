import { useCallback, useEffect, useState } from "react";

const Deck = ({ meta, drawCb, deckCreation, drawHandCb }) => {
  const [deck, setDeck] = useState([]);

  const shuffle = () => {
    for (let i = meta.size - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[swapIndex];
      deck[swapIndex] = temp;
    }
    setDeck([...deck]);
  };

  const draw = () => {
    if (deck.length > 0) {
      const card = deck.splice(0, 1);
      setDeck([...deck]);
      drawCb(card[0]);
    } else {
      console.error("No more cards to draw");
    }
  };

  const drawHand = () => {
    if (deck.length >= 4) {
      const cards = deck.splice(0, 4);
      setDeck([...deck]);
      drawHandCb(cards);
    } else {
      console.error("Cannot draw a hand");
    }
  };

  const initialize = useCallback(() => {
    const deck = [];
    const suits = meta.suits;
    const values = meta.values;
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const card = {};
        card.suit = suits[i].symbol;
        card.color = suits[i].color;
        card.value = values[j];
        deck.push(card);
      }
    }
    setDeck(deck);
  }, [meta.suits, meta.values]);

  useEffect(() => {
    initialize();
  }, [initialize, deckCreation]);

  return (
    <>
      <div className="deck">
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={draw}>Draw</button>
        <button onClick={drawHand}>Draw Hand</button>
      </div>
      {deck.map((card, index) => (
        <div key={index}>{JSON.stringify(card)}</div>
      ))}
    </>
  );
};

export default Deck;
