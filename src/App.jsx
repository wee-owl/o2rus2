import { useState } from "react";
import AppContext from "./Context/appContext";
import { initialAppState } from "./utils/initialAppState";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Table from "./components/Table/Table";
import Modal from "./components/Modal/Modal";


function App() {
  const [appState, setAppState] = useState(initialAppState);


  return (
    <>
    <AppContext.Provider value={{appState, setAppState}}>
      <Header />
        <main>
          <Register />
          <Table />
          <Modal />
        </main>
    </AppContext.Provider>
    </>
  );
}

export default App;