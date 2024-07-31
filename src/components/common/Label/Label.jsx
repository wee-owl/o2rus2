import PropTypes from "prop-types";


function Label({...props}) {
  return (
    <label htmlFor={props.id}>{props.label}</label>
  );
}

export default Label;

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};