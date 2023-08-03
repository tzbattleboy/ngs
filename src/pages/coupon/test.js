import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mimi from "../../assets/images/mimi.png";
import Alice from "../../assets/images/alice.png";
import Lucky from "../../assets/images/lucky.png";
import Puynun from "../../assets/images/puynun.png";
import AddDog from "../../assets/images/add-dog.png";

export default function Test() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="bg-list">
        <Slider {...settings} className="card">
          <div className="card-dog">
            <div className="btn-dog">
              <img src={Mimi} alt="logo" style={{ width: "100%" }} />
            </div>
            <p>Mimi</p>
          </div>
          <div className="card-dog">
            <div className="btn-dog">
              <img src={Alice} alt="logo" style={{ width: "100%" }} />
            </div>
            <p>Alice</p>
          </div>
          <div className="card-dog">
            <div className="btn-dog">
              <img src={Lucky} alt="logo" style={{ width: "100%" }} />
            </div>
            <p>Lucky</p>
          </div>
          <div className="card-dog">
            <div className="btn-dog">
              <img src={Puynun} alt="logo" style={{ width: "100%" }} />
            </div>
            <p>ปุยนุ่น</p>
          </div>
          <div className="card-dog">
            <div className="btn-dog">
              <img src={AddDog} alt="logo" style={{ width: "100%" }} />
            </div>
            <p>เพิ่มน้องหมา</p>
          </div>
        </Slider>
      </div>
    </>
  );
}
