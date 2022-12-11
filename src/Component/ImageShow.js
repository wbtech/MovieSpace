import React from "react";
import "./Moviecard.css";

import batman2 from "./Images/batman2.jpg";
import batman3 from "./Images/batman3.jpg";
import batman4 from "./Images/batman4.jpg";
import batman5 from "./Images/batman5.jpg";
import batman6 from "./Images/batman6.jpg";
import batman7 from "./Images/batman7.jpg";

const imageBox = {
  height: "40vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
};

const imageContainer = {
  width: "40%",
  overflow: "hidden",
  boxShadow: "0 0 10px orange",
  borderadius: "2rem",
};

const moving = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translateX(0px)",
  transition: "transform 0.3 linear",
};

const ImageShow = () => {
  return (
    <>
      <div style={imageBox}>
        <h2>Out Now</h2>
        <div style={imageContainer}>
          <div style={moving} id='move'>
            <img src={batman2} alt='batman' />
            <img src={batman3} alt='batman' />
            <img src={batman4} alt='batman' />
            <img src={batman5} alt='batman' />
            <img src={batman6} alt='batman' />
            <img src={batman7} alt='batman' />
          </div>
        </div>
      </div>
    </>
  );
};

const moves = document.getElementById("move");
const images = document.querySelectorAll("img");
let start = 0;
console.log(moves);

function move() {
  start++;
  if (start > images.length - 1) {
    start = 0;
  }
  moves.style.transform = `translateX(${-start * 80}%)`;
}
setInterval(move, 4000);

export default ImageShow;
