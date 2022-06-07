import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Teams from "../../Component/Teams/Teams";
import Features from "../../Component/Features/Features";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Teams />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default Home;
