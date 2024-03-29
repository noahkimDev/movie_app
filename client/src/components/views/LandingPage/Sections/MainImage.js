/* eslint-disable no-unreachable */
import React from "react";

function MainImage(props) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
  39%,rgba(0,0,0,0)
  41%,rgba(0,0,0,0.65)
  100%)`,
        height: "500px",
        backgroundImage: `url('${props.image}')`,
        width: "100%",
        backgroundColor: "#1c1c1c",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>{props.title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
