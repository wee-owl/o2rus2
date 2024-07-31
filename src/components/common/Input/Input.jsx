import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker, { registerLocale } from "react-datepicker";
import { getMonth, getYear } from "date-fns";
import { ru } from "date-fns/locale/ru";
registerLocale("ru", ru)
import "react-datepicker/dist/react-datepicker.css";


function Input({...props}) {
  const [startDate, setStartDate] = useState();
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1940, getYear(new Date()) + 1, 1);
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const selectStyle = {
    width: "auto",
    height: "auto",
    padding: "0",
    fontSize: "12px",
    color: "#808080",
    border: "1px solid #808080",
    borderRadius: "5px",
  };

  if (props.type === "date" && props.id === "age") {
    return (
      <>
        <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          id={props.id}
          name={props.name}
          form={props.formId}
          dateFormat="dd.MM.YYYY"
          locale="ru"
          showIcon
          icon={
            <svg width="668" height="668" viewBox="0 0 668 668" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34 234H634M167.333 34V100.667M500.667 34V100.667M134 334H200.667M300.667 334H367.333M467.333 334H534M134 434H200.667M300.667 434H367.333M467.333 434H534M134 534H200.667M300.667 534H367.333M467.333 534H534M140.667 634H527.333C564.67 634 583.34 634 597.6 626.733C610.143 620.343 620.343 610.143 626.733 597.6C634 583.34 634 564.67 634 527.333V207.333C634 169.996 634 151.328 626.733 137.067C620.343 124.523 610.143 114.324 597.6 107.933C583.34 100.667 564.67 100.667 527.333 100.667H140.667C103.33 100.667 84.6613 100.667 70.4007 107.933C57.8563 114.324 47.6577 124.523 41.2663 137.067C34 151.328 34 169.996 34 207.333V527.333C34 564.67 34 583.34 41.2663 597.6C47.6577 610.143 57.8563 620.343 70.4007 626.733C84.6613 634 103.33 634 140.667 634Z" stroke="black" strokeWidth="66.6667" strokeLinecap="round"/>
            </svg>
          }

          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
            <button 
              style={{marginRight: "10px"}}
              onClick={decreaseMonth} 
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <select
              style={selectStyle}
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              style={selectStyle}
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button 
              style={{marginLeft: "10px"}}
              onClick={increaseMonth} 
              disabled={nextMonthButtonDisabled}
            >
              {">"}
            </button>
            </div>
          )}
        />
      </>
    )
  }

  if (props.type === "date") {
    return (
      <>
        <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
          id={props.id}
          name={props.name}
          form={props.formId}
          dateFormat="dd.MM.YYYY"
          locale="ru"
          showIcon
          icon={
            <svg width="668" height="668" viewBox="0 0 668 668" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34 234H634M167.333 34V100.667M500.667 34V100.667M134 334H200.667M300.667 334H367.333M467.333 334H534M134 434H200.667M300.667 434H367.333M467.333 434H534M134 534H200.667M300.667 534H367.333M467.333 534H534M140.667 634H527.333C564.67 634 583.34 634 597.6 626.733C610.143 620.343 620.343 610.143 626.733 597.6C634 583.34 634 564.67 634 527.333V207.333C634 169.996 634 151.328 626.733 137.067C620.343 124.523 610.143 114.324 597.6 107.933C583.34 100.667 564.67 100.667 527.333 100.667H140.667C103.33 100.667 84.6613 100.667 70.4007 107.933C57.8563 114.324 47.6577 124.523 41.2663 137.067C34 151.328 34 169.996 34 207.333V527.333C34 564.67 34 583.34 41.2663 597.6C47.6577 610.143 57.8563 620.343 70.4007 626.733C84.6613 634 103.33 634 140.667 634Z" stroke="black" strokeWidth="66.6667" strokeLinecap="round"/>
            </svg>
          }
        />
      </>
    )
  }

  return (
    <>
      <input type={props.type} id={props.id} name={props.name} form={props.formId}/>
    </>
  )
}

export default Input;

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  formId: PropTypes.string,
};