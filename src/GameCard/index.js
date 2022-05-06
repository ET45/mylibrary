const GameCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.link}</p>
      <p>{props.ghlink}</p>
    </div>
  );
};

export default GameCard;
