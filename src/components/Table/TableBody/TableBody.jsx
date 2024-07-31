import PropTypes from "prop-types";
import {verify, leader, city, medical} from "../../../utils/const";
import Select from "../../common/Select/Select";
import Input from "../../common/Input/Input";
import getAge from "../../../utils/getAge";
import style from "../Table.module.css";


function TableBody({...props}) {
  return (
    <>
      <td>{props.number}</td>
      <td>{props.name}</td>
      <td>{props.date}</td>
      <td>{props.manager}</td>
      <td>{props.tel}</td>
      <td>{getAge(props.age)}</td>
      <td>{props.area}</td>
      <td>{props.trailer}</td>
      <td>{props.experience}</td>
      <td>{props.source}</td>
      <td>{props.advisor}</td>
      <td className={props.verify ? style.table__item : `${style.table__item} ${style.table__item_empty}`}>
        <Select {...{
          id: "verify", 
          name: "verify", 
          options: verify.map(item => ({"value": item, "text": item}))
          }}
        />
      </td>
      <td className={style.table__item}>
        <Select {...{
          id: "leader", 
          name: "leader", 
          options: leader.map(item => ({"value": item, "text": item}))
          }}
        />
      </td>
      <td className={style.table__item}>
        <textarea id="leaderComment" name="leaderComment" placeholder="Введите текст ..."></textarea>
      </td>
      <td className={style.table__item}>
        <Select {...{
          id: "city", 
          name: "city", 
          options: city.map(item => ({"value": item, "text": item}))
          }}
        />
      </td>
      <td className={style.table__item}>
        <Input {...{type: "date", id: "enterDate", name: "enterDate"}}/>
      </td>
      <td className={!props.medical ? style.table__item : `${style.table__item} ${style.table__item_full}`}>
        <Select {...{
          id: "medical", 
          name: "medical", 
          options: medical.map(item => ({"value": item, "text": item}))
          }}
        />
      </td>
      <td className={style.table__item}>
        <textarea id="comment" name="comment" defaultValue={props.comment}></textarea>
      </td>
    </>
  );
}

export default TableBody;

TableBody.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  manager: PropTypes.string,
  tel: PropTypes.string,
  age: PropTypes.string,
  area: PropTypes.string,
  trailer: PropTypes.string,
  experience: PropTypes.string,
  source: PropTypes.string,
  advisor: PropTypes.string,
  verify: PropTypes.string,
  leader: PropTypes.string,
  leaderComment: PropTypes.string,
  enterCity: PropTypes.string,
  enterDate: PropTypes.string,
  medical: PropTypes.string,
  comment: PropTypes.string,
};