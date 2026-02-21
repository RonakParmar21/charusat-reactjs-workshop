const Button = (props: { name: string; color: string }) => {
  return (
    <div>
      <button style={{ backgroundColor: props.color }}>{props.name}</button>
    </div>
  );
};

export default Button;
