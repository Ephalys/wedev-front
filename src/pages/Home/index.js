import React, { Component } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Presentation from "../../components/Presentation";
import Hero from "../../components/Hero";
import ListBlock from "../../components/ListBlock";

class Index extends Component {
  render() {
    return (
      <main>
        <Header />
        <Hero />
        <Presentation />
        <ListBlock />
        <Footer />
      </main>
    );
  }
}

export default Index;
