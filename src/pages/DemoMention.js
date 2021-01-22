import React from "react";
import Taggable from "./Taggable";

function About(props) {
  return (
    <>
      <div
        style={{
          width: "80%",
          height: "768px",
          background: "#eee",
          margin: "50px auto",
        }}
      >
        <div
          style={{
            width: "250px",
            border: "1px solid black",
            margin: "50px auto",
          }}
        >
          <Taggable />
        </div>
      </div>
    </>
  );
}
export default About;
