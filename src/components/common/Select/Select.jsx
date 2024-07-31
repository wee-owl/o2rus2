import PropTypes from "prop-types";


function Select({...props}) {
  return (
    <>
      <select id={props.id} name={props.name} form={props.formId}>
        {
          props.options.map((item, i) => 
            <option value={item.value} key={i}>{item.text}</option>
          )
        }
      </select>
    </>
  );
}

export default Select;

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  formId: PropTypes.string,
  options: PropTypes.array,
};