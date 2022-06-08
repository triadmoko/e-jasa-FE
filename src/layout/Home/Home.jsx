import React from "react";
import Header from "../../Component/Header/Header";
import Teams from "../../Component/Teams/Teams";
import Features from "../../Component/Features/Features";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Teams />
        <Features />
      </div>
    );
  }
}

export default Home;
