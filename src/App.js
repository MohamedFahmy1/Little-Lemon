import React, { Fragment } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Nav />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
