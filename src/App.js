import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.css";
import Routes from "./Routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
