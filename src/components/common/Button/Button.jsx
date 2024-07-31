import PropTypes from "prop-types";


function Button({...props}) {
  return (
    <>
      <button type={props.type} id={props.id}>{props.text}</button>
    </>
  );
}

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};