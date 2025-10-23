const ComponentSomeMath = () => {
  const mathProblem = (num1, num2) => {
    return num1 + num2 * num2;
  };

  return <h2>Hello {mathProblem(5, 9)}</h2>;
};
export default ComponentSomeMath;
