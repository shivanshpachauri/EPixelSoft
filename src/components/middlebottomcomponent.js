import React from "react";
import Building from "../Images/Building.jpg";

const MiddleBottomComponent = () => {
  return (
    <>
      <center>
        <h2>Have you ever posted any photo from social media</h2>
        <p>
          Elit labore ipsum irure voluptate ipsum ex sit. Ea dolore adipisicing
          qui ullamco cupidatat Lorem reprehenderit commodo aliqua laborum ad
          aliqua non proident.
        </p>
      </center>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1, marginRight: "20px" }}>
          <strong>
            <h6>
              Reprehenderit aute aliqua mollit adipisicing culpa exercitation et
              labore reprehenderit.
            </h6>
          </strong>
          <p style={{ fontSize: "80%" }}>
            Consequat enim velit adipisicing reprehenderit ex proident ipsum
            nulla cupidatat deserunt sunt.
          </p>

          <strong>
            <h6>
              Reprehenderit aute aliqua mollit adipisicing culpa exercitation et
              labore reprehenderit.
            </h6>
          </strong>
          <p style={{ fontSize: "80%" }}>
            Anim ad exercitation velit nulla consequat adipisicing in velit ad
            deserunt.
          </p>

          <strong>
            <h6>
              Reprehenderit aute aliqua mollit adipisicing culpa exercitation et
              labore reprehenderit.
            </h6>
          </strong>
          <p style={{ fontSize: "80%" }}>
            Magna eu incididunt Lorem sint eu eu consectetur amet.
          </p>
        </div>

        <img
          src={Building}
          alt="building"
          style={{ height: "400px", width: "500px", flexShrink: 0 }} // prevent image from shrinking
        />
      </div>
    </>
  );
};

export default MiddleBottomComponent;
