import React, { Component } from "react";
import TopBanner from "../../components/layout/TopBanner";
import TopLogo from "../../components/layout/TopLogo";
import Mimi from "../../assets/images/mimi.png";
import Alice from "../../assets/images/alice.png";
import Lucky from "../../assets/images/lucky.png";
import Puynun from "../../assets/images/puynun.png";
import AddDog from "../../assets/images/add-dog.png";
import CardCoupon from "../../assets/images/card-cupon.svg";
import DiscountCoupon from "../../assets/images/discount-coupon.png";
import Get1 from "../../assets/images/1get1-coupon.png";
import Discount50 from "../../assets/images/discount-coupon50.png";
import Slider from "react-slick";

export default function CouponListing() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      <div>
        <TopLogo />
        <TopBanner type="Coupon" />
        <div className="container-coupon">
          <div>
            <div className="container ">
              <div className="bg-list">
                <Slider {...settings} className="card">
                  <div className="card-dog ">
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
              <div className="coupon-list">
                <div>
                  <div className="coupon-num">
                    <div>จำนวนคูปอง / 1 Line ID ที่ใช้ได้ใน 1 เดือน</div>
                    <div>3/3</div>
                  </div>
                </div>
                <div className="Coupon">
                  <div className="mt-[12px] text-[28px] pl-[17px]">
                    คูปองสำหรับ Mimi
                  </div>
                  <div className="card-coupon mt-[-5px] mb-[20px]">
                    <div className="container-c">
                      <img className="bg" src={CardCoupon} alt="" />
                      <div className="btn">
                        <div className="mt-[-10px] pl-[25px] w-full">
                          <img src={DiscountCoupon} alt="" />
                        </div>
                        <div className=" pr-[41px] ml-[-105px] w-full">
                          <p className="text-black text-[16px]">
                            ส่วนลด 10% สำหรับซื้อผลิตภัณฑ์
                          </p>
                          <p className="text-[12px] text-gray-400">
                            ใช้คูปองได้ถึง 21/01/2565
                          </p>
                          <button className="btn-coupon px-[36px] px-[9.5px] mt-[10px]">
                            ใช้คูปอง
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="container-c">
                      <img className="bg" src={CardCoupon} alt="" />
                      <div className="btn">
                        <div className="mt-[-10px] pl-[25px] w-full">
                          <img src={Get1} alt="" />
                        </div>
                        <div className=" pr-[41px] ml-[-105px] w-full">
                          <p className="text-black text-[16px]">
                            1 กล่อง แถม 1 เม็ด
                          </p>
                          <p className="text-[12px] text-gray-400">
                            ใช้คูปองได้ถึง 21/01/2565
                          </p>
                          <button className="btn-coupon mt-[10px]">
                            ใช้คูปอง
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="container-c">
                      <img className="bg" src={CardCoupon} alt="" />
                      <div className="btn">
                        <div className="mt-[-10px] pl-[25px] w-full">
                          <img src={Discount50} alt="" />
                        </div>
                        <div className="ml-[-105px] pr-[41px] w-full">
                          <p className="text-blue-500 text-[14px]">
                            โรงพยาบาลสัตว์ทองหล่อ สาขาพระราม 2
                          </p>
                          <p className="text-[16] text-black">
                            ส่วนลด 50 บาท สำหรับซื้อผลิตภัณฑ์
                          </p>
                          <p className="text-[12px] text-gray-400">
                            ใช้คูปองได้ถึง 21/01/2565
                          </p>
                          <button className="btn-coupon mt-[-5px]">
                            ใช้คูปอง
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history pb-[20px]">
                  <button className="btn-history text-[24px]">
                    ประวัติการใช้คูปอง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
