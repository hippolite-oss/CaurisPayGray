import React from "react";
import "./Content2.css";

const Content2 = () => {
  return (
    <div className="content2-container">
      <div className="top-row">
        <div className="box box1">Div 1 (haut gauche)</div>
        <div className="box box2">Div 2 (haut droit)</div>
      </div>
      <div className="bottom-row">
        <div className="box box3">Div 3 (bas gauche)</div>
        <div className="box box4">Div 4 (bas centre)</div>
        <div className="box box5">Div 5 (bas droit)</div>
      </div>
    </div>
  );
};

export default Content2;
