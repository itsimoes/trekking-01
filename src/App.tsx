import React from "react";
import Home from "./components/Home/Home";
import Highlight01 from "./components/Highlights/Highlight01";
import Experience from "./components/Experience/Experience";
import RouteMap from "./components/Routes/RouteMap";
import Highlight02 from "./components/Highlights/Highlight02";
import RouteOptions from "./components/Routes/RouteOptions";
import Videos from "./components/Videos/Videos";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Highlight01 />
      <Experience />
      <RouteMap />
      <Highlight02 />
      <RouteOptions />
      <Videos />
      <Gallery />
      {/* <Footer /> */}
    </>
  );
}

export default App;
