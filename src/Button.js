const Button = ({ text, changeBox }) => {
  return (
    <div onClick={changeBox} className="button">
      {text}
    </div>
  );
};

export default Button;
