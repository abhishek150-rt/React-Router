import React from "react";
import Header from "./Header";
// import { useHistory } from "react-router-dom";
const About = (props) => {
  // const history = useHistory();
  return (
    <>
      <Header />
      <section>
        <h3 className="text-center my-5">This is my {props.name}</h3>
      </section>
    </>
  );
};

export default About;
