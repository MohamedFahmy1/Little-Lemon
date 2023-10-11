import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Reservation from "../components/reservation/Reservation";

const ReservationPage = () => {
  return (
    <Fragment>
      <Header />
      <Reservation />
      <Footer />
    </Fragment>
  );
};

export default ReservationPage;
