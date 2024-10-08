import React from "react";
import backgroundimage from "../Images/backgroundimage.jpg";
const Photo = () => {
  return (
    <center>
      <img
        width={1000}
        height={400}
        src={backgroundimage}
        alt="backgroundimage"
      />
    </center>
  );
};

export default Photo;
