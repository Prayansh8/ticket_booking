// App.js
import React from "react";
import BusSelect from "./components/BusSelect";
import Header from "./components/Header";
import "./App.css"

const App = () => {
  return (
    <div className="container App">
      <Header />
      <BusSelect />
    </div>
  );
};

export default App;
