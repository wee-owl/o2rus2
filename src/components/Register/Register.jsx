import { useContext } from "react";
import AppContext from "../../Context/appContext";
import { register } from "../../utils/const";
import Label from "../common/Label/Label";
import Select from "../common/Select/Select";
import Button from "../common/Button/Button";
import style from "./Register.module.css";


function Register() {
  const {appState, setAppState} = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.closest("button#create-button")) return;
    setAppState({
      ...appState,
      modalActive: true,
    });
  };


  return (
    <section className={style.register} onClick={handleClick}>
      <h2 hidden>Журнал регистрации</h2>
      <form className={style.register__form} id="form">
        {
          register.map((item, i) => 
            <div className={style.register__item} key={i}>
              <Label {...item}/>
              <Select {...item}/>
            </div>
          )
        }
        <Button type={"submit"} id={"form-button"} text={"Найти"}/>
      </form>
      <Button type={"button"} id={"create-button"} text={"Создать"}/>
      <Button type={"button"} id={"pattern-button"} text={"Шаблоны"}/>
    </section>
  );
}

export default Register;