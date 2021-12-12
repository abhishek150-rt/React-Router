import React, { useState } from "react";
import Header from "./Header";
import Result from "./Result";
import Form from "react-bootstrap/Form";
const Search = () => {
  const [img, setImg] = useState();
  const handleChange = (e) => {
    setImg(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <Header />

      <main>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="input"
              placeholder="search anything.."
              autoComplete="off"
              onChange={handleChange}
              value={img}
            />
          </Form.Group>
        </Form>
      </main>
     <Result data={img} />
    </>
  );
};

export default Search;
