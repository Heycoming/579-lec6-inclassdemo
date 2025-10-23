const OpeningClosingComponent = (props) => {
  return (
    <>
      <h3>Aliens!</h3>
      <p>👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾 </p>
      {props.children}
      <p> 👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾 </p>
    </>
  );
};
export default OpeningClosingComponent;
