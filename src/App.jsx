import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appstore from "./Utils/appStore";

function App() {

  return (
    <>
      <Provider store={appstore}>
        <div>
          <Body />
        </div>
      </Provider>
    </>
  );
}

export default App;
