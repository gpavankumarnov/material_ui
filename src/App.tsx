import React from "react";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./core/stateManagement/store";
import RoutesComp from "./core/RoutesComp";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <h2>E-commerce App</h2>
      <RoutesComp />
    </Provider>
  );
}

export default App;
