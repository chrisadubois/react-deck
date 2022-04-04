import Card from "../Card";

const Hand = ({ hand }) => {
  return (
    <ul>
      {hand.map((card, index) => {
        return (
          <li key={index}>
            <Card symbol={card.suit} number={card.value} color={card.color} />
          </li>
        );
      })}
    </ul>
  );
};

export default Hand;
