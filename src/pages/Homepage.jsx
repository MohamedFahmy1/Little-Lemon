import { Fragment } from "react";
import FeatureMenu from "../components/featureMenu/FeatureMenu";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <FeatureMenu />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
