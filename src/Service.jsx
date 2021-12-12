import React from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'
const Service = () => {
  
  return (
     
    <>
      <Header />
      <section>
        <h3>This is my service page</h3>
        <Link to="/service/Web Development /">
        <button className="btn btn-primary">Web Development</button>
        </Link>
      </section>
    </>
  );
};

export default Service;
