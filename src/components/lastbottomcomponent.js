import React from "react";
import computerfirstcard from "../Images/computerfirstcard.jpg";
import chartsecondcard from "../Images/chartsecondcard.jpg";
import handshakebusinessthird from "../Images/handhshakebusinessthird.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import
const LastBottomComponent = () => {
  return (
    <center>
      <h1>Make your photo more stylish</h1>
      <br></br>
      <weak>
        <h2>In cupidatat eu ut elit tempor cillum fugiat eu tempor.</h2>
      </weak>
      <div
        // key={index}
        style={{
          marginLeft: "10rem",
          display: "flex",
          // justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={computerfirstcard}
            style={{ height: "200px" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", marginRight: "2rem", marginLeft: "2rem" }}
        >
          <Card.Img
            variant="top"
            src={chartsecondcard}
            style={{ height: "200px" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={handshakebusinessthird} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <br></br>
    </center>
  );
};

export default LastBottomComponent;
