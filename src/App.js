import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReservationPage from "./pages/ReservationPage";
import "./styles.css";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Fragment>
  );
}
