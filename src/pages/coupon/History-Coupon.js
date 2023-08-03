import React, { Component } from "react";
import TopBanner from "../../components/layout/TopBanner";
import TopLogo from "../../components/layout/TopLogo";

import HistoryCoupon from "../../assets/images/history-coupon.svg";
import DiscountCoupon from "../../assets/images/discount-coupon.png";
import Get1 from "../../assets/images/1get1-coupon.png";
import Discount50 from "../../assets/images/discount-coupon50.png";
export default function HistoryCouponListing() {
  return (
    <>
      <div>
        <TopLogo />
        <TopBanner type="Coupon" />
        <div className="container-coupon flex">
          <div>
            <div className="container ">
              <div className="bg-list"></div>
              <div className="coupon-list">
                <div>
                  <div className="coupon-num">
                    <div>จำนวนคูปอง / 1 Line ID ที่ใช้ได้ใน 1 เดือน</div>
                    <div>3/3</div>
                  </div>
                </div>
                <div className="Coupon">
                  <div className="mt-[12px] text-[28px] pl-[17px]">
                    ประวัติการใช้คูปอง
                  </div>
                  <div className="card-coupon mt-[-5px] mb-[20px]">
                    <div className="container-c">
                      <img className="bg" src={HistoryCoupon} alt="" />
                      <div className="btn">
                        <div className="mt-[-10px] pl-[25px] w-full">
                          <img src={DiscountCoupon} alt="" />
                        </div>
                        <div className="leading-3  pr-[41px] ml-[-105px] w-full">
                          <p className="text-blue-900 text-[16px]">
                            ส่วนลด 10% สำหรับซื้อผลิตภัณฑ์
                          </p>
                          <p className="text-[12px] text-gray-400">
                            <p>โคดส่วนลด : 124KNW2022</p>
                            <p>ชื่อน้องหมา : Mimi</p>
                            <p>รหัสร้านค้า : 121212121</p>
                            <p>วัน-เวลา : 21/12/2564 14:33 น.</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="container-c">
                      <img className="bg" src={HistoryCoupon} alt="" />
                      <div className="btn">
                        <div className=" mt-[-10px] pl-[25px] w-full">
                          <img src={Get1} alt="" />
                        </div>
                        <div className="leading-3  ml-[-105px] pr-[41px] w-full">
                          <p className="text-blue-900 text-[16px]">
                            1 กล่อง แถม 1 เม็ด
                          </p>
                          <p className="text-[12px] text-gray-400">
                            <p>โคดส่วนลด : 124KNW2022</p>
                            <p>ชื่อน้องหมา : Alice</p>
                            <p>รหัสร้านค้า : 121212121</p>
                            <p>วัน-เวลา : 21/12/2564 14:33 น.</p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history pb-[20px] mt-[107px]">
                  <button className="btn-history-coupon text-[24px]">
                    ย้อนกลับ
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
