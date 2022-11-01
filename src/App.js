import React, { Component } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Links from "./components/links/Links";
import Footer from "./components/footer/Footer";
import ImageSection from "./components/secondSection/ImageSection";

class App extends Component {
  state = {
    user: "Annette Black",
    info: [
      {
        url: "https://twitter.com/mrexcel153",
        heading: "Twitter Link",
        description: "@Mrexcel153",
        id: "twitter",
      },
      {
        url: "https://training.zuri.team/",
        heading: "Zuri Team",
        description: "",
        id: "btn__zuri",
      },
      {
        url: " http://books.zuri.team",
        heading: "Zuri Books",
        description: "Find all Manner of good books on programming and designs",
        id: "books",
      },
      {
        url: "https://books.zuri.team/python-for-beginners?ref_id=ignatiusomeje153",
        heading: "Python for Beginners",
        description: "Get the best book on Python",
        id: "book__python",
      },
      {
        url: "https://background.zuri.team",
        heading: "Background Check for Coders",
        description:
          "Checkout the Best Background Checker for Coders",
        id: "pitch",
      },
      {
        url: "https://books.zuri.team/design-rules",
        heading: "Design Rules",
        description: "Get the best book on Designs Rules",
        id: "book__design",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Links info={this.state.info} />
        <ImageSection />
        <Footer />
      </div>
    );
  }
}

export default App;
