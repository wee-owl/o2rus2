import { useContext } from "react";
import AppContext from "../../Context/appContext";
import { tableHeader } from "../../utils/const";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import style from "./Table.module.css";


function Table() {
  const {appState, setAppState} = useContext(AppContext);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const trNumber = e.target.closest("tr").firstChild.textContent;

    let newAppState = appState.persons[+trNumber - 1];
    newAppState[key] = value;
    setAppState({
      ...appState,
      ...appState.persons.filter(item => item.number === trNumber).map(el => el.key = value),
    });
  };

  console.dir(appState);


  return (
    <section className={style.table}>
      <h2 hidden>Таблица</h2>
      <table className={style.table__block}>
        <thead className={style.table__head}>
          <tr>
            {
              tableHeader.map((item, i) => <TableHead text={item} key={i}/>)
            }
          </tr>
        </thead>
        <tbody>

          {
            appState.persons.map((item, i) => 
              <tr key={i} onChange={handleChange}>
                <TableBody {...item}/>
              </tr>
            )
          }

        </tbody>
      </table>
    </section>
  );
}

export default Table;