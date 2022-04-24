import React from 'react';
import Counter from './Counter';
// import "./App.css";

import MyHeader from './MyHeader';
// import MyFooter from "./MyFooter";

function App() {
  let name = "체다";

  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;

  return (
    <div>
      <MyHeader />
      <Counter />
    </div>
  );
}

export default App;
