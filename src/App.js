import React from "react";
import TopNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Photo2 from "./components/Photo2";
import BottomComponent from "./components/bottom";
import MiddleComponent from "./components/middlecomponent";
import MiddleBottomComponent from "./components/middlebottomcomponent";
import LastBottomComponent from "./components/lastbottomcomponent";
const App = () => {
  return (
    <>
      <TopNavbar />
      <Photo2 />
      <MiddleComponent />
      <MiddleBottomComponent />
      <LastBottomComponent />
      <BottomComponent />
    </>
  );
};

export default App;
