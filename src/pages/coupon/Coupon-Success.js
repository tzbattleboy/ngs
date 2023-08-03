import React, { useState } from "react";
import TopBanner from "../../components/layout/TopBanner";
import TopLogo from "../../components/layout/TopLogo";
import Checked from "../../assets/images/checked.svg";

export default function CouponSuccess() {
  return (
    <>
      <div className="container-fluid">
        <TopLogo />
        <div
          className="coupon-list"
          style={{
            padding: "24px 13px 35px 13px",
          }}
        >
          <div className=" ">
            <div className="logo-success">
              <img src={Checked} alt="logo" />
            </div>
            <div>
              <p className="text-center text-[36px] leading-[100%]">
                ใช้คูปองสำเร็จ
              </p>
              <p className="text-center text-[24px] leading-[100%]">
                ส่วนลด 10% สำหรับซื้อผลิตภัณฑ์
              </p>
            </div>
            <div className="card-point mt-[24px]">
              <div className="btn-point  px-[74px] py-[20px]">
                <p className="text-[20px] font-normal text-center">
                  คะแนนที่ได้รับ
                </p>
                <div className="text-center text-[52px] leading-[84%]">
                  500 คะแนน
                </div>
              </div>
            </div>
            <div className="mt-[16px] px-[20px]">
              <p className="font-normal text-[24px]">รายละเอียด</p>
              <hr className="divider2 mt-[8px]"></hr>
              <div className="success-detail mt-[16px] leading-[120%]">
                <p>วันที่/เวลา:</p>
                <p className="font-light text-[20px]">22/12/2564 12:21:01</p>
              </div>
              <div className="success-detail mt-[16px] leading-[120%]">
                <p>ร้านค้า:</p>
                <p className="font-light text-[20px]">
                  213435A564 โรงพยาบาลสัตว์เจริญสุข
                </p>
              </div>
              <div className="success-detail mt-[16px] leading-[120%]">
                <p>รหัสอ้างอิง:</p>
                <p className="font-light text-[20px]">JK353535A589</p>
              </div>
            </div>

            <div className="btn-use mt-[134px] mb-[32px]">
              <button className="btn-success text-[24px]">เสร็จสิ้น</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
