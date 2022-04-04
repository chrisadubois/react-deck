import { useState } from "react";
import Card from "./components/Card";
import Deck from "./components/Deck";
import Hand from "./components/Hand";
import "./styles.css";
import { getCardMeta } from "./utils/card";

export default function App() {
  const [deck, setDeck] = useState(0);
  const [card, setCard] = useState(undefined);
  const [hand, setHand] = useState(undefined);
  const meta = getCardMeta();

  const drawCard = (card) => {
    setCard(card);
  };

  const drawHand = (hand) => {
    setHand(hand);
  };

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setDeck(deck + 1);
            setCard(undefined);
          }}
        >
          Generate Deck
        </button>
      </div>
      {hand ? <Hand hand={hand}></Hand> : null}
      {card ? (
        <Card symbol={card.suit} number={card.value} color={card.color}></Card>
      ) : null}
      {deck ? (
        <Deck
          meta={meta}
          drawCb={drawCard}
          deckCreation={deck}
          drawHandCb={drawHand}
        ></Deck>
      ) : null}
    </div>
  );
}
