import PropTypes from "prop-types";


function TableHead({...props}) {
  return (
    <th>{props.text}</th>
  );
}

export default TableHead;

TableHead.propTypes = {
  text: PropTypes.string,
};