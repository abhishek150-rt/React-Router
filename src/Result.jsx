import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
const Result = (props) => {
    
    const image=`https://source.unsplash.com/400x300/?${props.data}`
    return (
        <Container>
            <Row className="d-flex justify-content-center"> 
            <Col xs={6} md={4} >
         <img src={image} alt="unsplash" rounded style={{borderRadius:"10px",width:"100%"}} /> 
         </Col> 
         </Row> 
        </Container>
    )
}

export default Result;
