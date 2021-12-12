import React, { useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const FrontDev = () => {
  const location = useLocation();
  const history = useHistory();
  console.log(history)
  const [loc, setLocation] = useState();

  const getLocation = () => {
    setLocation(location.pathname);
  };
  const myParams = useParams();
  return (
    <>
      <Header />
      <section>
        <h1>{myParams.subname}</h1>
        <h5>{loc}</h5>
        {location.pathname ===
        "/service/Web Development/Front End Development" ? (
          <button className="btn btn-success" onClick={getLocation}>
            Show Location
          </button>
        ) : null}
        <button className="btn btn-danger" onClick={history.goBack}>go back</button>
       
      </section>
    </>
  );
};

export default FrontDev;
