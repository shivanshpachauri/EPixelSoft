// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import data from "./data.json";
// const MiddleComponent = () => {
//   return (
//     <div>
//       {data.map((item) => (
//         <Card style={{ width: "18rem" }}>
//           {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//           <Card.Body>
//             <Card.Title>{item.heading}</Card.Title>
//             <Card.Text>{item.paragraph}</Card.Text>
//             <Button variant="primary">Learn more</Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default MiddleComponent;
import React from "react";
import { Card, Button } from "react-bootstrap";
import data from "./data.json"; // Adjust the import based on your structure

const MiddleComponent = () => {
  const cardPairs = [];

  for (let i = 0; i < data.length; i += 2) {
    cardPairs.push(data.slice(i, i + 2));
  }

  return (
    <>
      <center>
        <h1>Snap photos and share like</h1>
        <h1>Never before</h1>
      </center>
      {cardPairs.map((pair, index) => (
        <div
          key={index}
          style={{
            marginLeft: "10rem",
            display: "flex",
            // justifyContent: "space-between",
            width: "100%",
          }}
        >
          {pair.map((item, idx) => (
            <Card key={idx} style={{ width: "40%", margin: "10px" }}>
              <Card.Body>
                <Card.Title>{item.heading}</Card.Title>
                <Card.Text>{item.paragraph}</Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </>
  );
};

export default MiddleComponent;
