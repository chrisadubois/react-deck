const Card = ({ symbol, color, number }) => {
  return (
    <div className={`card card-${color}`}>
      <div className="card--top">
        <div className="card-symbol">{symbol}</div>
        <div className="card-value">{number}</div>
      </div>
      <div className="card--bottom">
        <div className="card-symbol">{symbol}</div>
        <div className="card-value">{number}</div>
      </div>
    </div>
  );
};

export default Card;
