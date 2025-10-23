const NameTag = (props) => {
  return (
    <ul>
      <li>
        <b>FIRST NAME</b>: {props.firstName}
      </li>
      <li>
        <b>LAST NAME</b>: {props.lastName}
      </li>
      <li>
        <i>{props.quote}</i>
      </li>
    </ul>
  );
};
export default NameTag;
