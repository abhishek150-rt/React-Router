import React from "react";
import Header from "./Header";
import Slider from "./Slider";
// import {useLocation} from "react-router-dom";

const Home = (props) => {
  // const location=useLocation();

  return (
    <>
      <Header/>
        <h3 style={{ textAlign:"center"}}>This is my {props.name}</h3>
        <Slider/>
      
    </>
  );
};

export default Home;
