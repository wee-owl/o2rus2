import { useContext } from "react";
import AppContext from "../../Context/appContext";
import { modalContent } from "../../utils/const";
import Input from "../common/Input/Input";
import Label from "../common/Label/Label";
import Select from "../common/Select/Select";
import Button from "../common/Button/Button";
import style from "./Modal.module.css";


function Modal() {
  const {appState, setAppState} = useContext(AppContext);
  const getValue = (array, id) => array.filter(item => item.id === id)[0].value;

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.closest("button#modal-close-button")) {
      setAppState({
        ...appState,
        modalActive: false,
      });
    }

    if (e.target.closest("button#save-button")) {
      const form = [...e.target.closest("form#modalForm")];
      setAppState({
        ...appState,
        modalActive: false,
        persons: [
          ...appState.persons,
          {
            number: appState.persons.length + 1,
            name: getValue(form, "name"),
            date: getValue(form, "date"),
            manager: getValue(form, "manager"),
            tel: getValue(form, "tel"),
            age: getValue(form, "age"),
            area: getValue(form, "area"),
            trailer: getValue(form, "trailer"),
            experience: getValue(form, "experience"),
            source: getValue(form, "source"),
            advisor: getValue(form, "advisor"),
            verify: null,
            leader: null,
            leaderComment: null,
            enterCity: null,
            enterDate: null,
            medical: null,
            comment: getValue(form, "comment"),
          }
        ],
      });
      e.target.closest("form#modalForm").reset();
    }
  };


  return (
    <section 
      className={style.modal} 
      style={appState.modalActive ? {display: "block"} : {}}
      onClick={handleClick}
    >
      <h2 hidden>Модальное окно</h2>
      <Button type={"button"} id={"modal-close-button"}/>
      <div className={style.modal__wrapper}>
        <form className={style.modal__form} id="modalForm">
          {
            modalContent.map((item, i) => 
              item.options.length ?
              <div className={style.modal__item} key={i} style={{order: `${i+1}`}}>
                <Label {...item}/>
                <Select {...item}/>
              </div> :
              <div className={style.modal__item} key={i} style={{order: `${i+1}`}}>
                <Label {...item}/>
                <Input {...item}/>
              </div>
            )
          }
          <div className={style.modal__button} style={{order: 4}}>
            <Button type={"button"} id={"match-button"} text={"Проверить на совпадение в БД"}/>
          </div>
          <div className={style.modal__button} style={{order: 99}}>
            <Button type={"submit"} id={"save-button"} text={"Сохранить"}/>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Modal;