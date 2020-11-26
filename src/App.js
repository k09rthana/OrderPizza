import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import OrderPizza from "./OrderPizza";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          {" "}
          <OrderPizza />
        </div>
      </div>
    </Provider>
  );
}

export default App;
