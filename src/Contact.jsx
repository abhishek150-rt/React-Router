import React from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Button from '@mui/material/Button';
const Contact = () => {
  return (
    <>
      <Header />
      <section>
          <h3>Contact Us....</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Contact;
