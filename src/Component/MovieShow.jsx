import React from "react";
import "./MovieShow.css";

const MovieShow = (props) => {
  let $close = document.querySelector(".close");
  let open = document.getElementsByClassName("check");
  let $box = document.querySelector(".box");
  let content = document.querySelector(".content");

  //   open.addEventListener("click", () => {
  //     content.style.display = "block";
  //   });
  //   $close.addEventListener("click", () => {
  //     content.style.display = "none";
  //   });

  return (
    <div className='content'>
      <div className='box'>
        <div className='contentBox'>
          <h1>Welcome</h1>
          <p>My Content</p>
        </div>
        <button class='close'>Close</button>
      </div>
    </div>
  );
};

export default MovieShow;
