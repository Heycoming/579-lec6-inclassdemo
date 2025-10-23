const ComponentSomeWord = () => {
  const someWord = "WORLD!";
  const mathProblem = (num1, num2) => {
    return num1 + num2 * num2;
  };
  return (
    <>
      <h2>Hello {someWord}</h2>
      <h3>MATH {mathProblem(2, 18)}</h3>
    </>
  );
};
export default ComponentSomeWord;
