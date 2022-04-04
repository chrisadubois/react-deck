export const suits = [
  { symbol: "♣︎", color: "black" },
  { symbol: "♠︎", color: "black" },
  { symbol: "♥︎", color: "red" },
  { symbol: "♦︎", color: "red" }
];
export const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
export const size = 52;

export const getCardMeta = () => {
  return {
    suits,
    values,
    size
  };
};
