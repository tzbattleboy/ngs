import React, { useState } from "react";
import LogoDog from "../../assets/images/siberian1.png";
import IconTime from "../../assets/images/akar-icons_alarm.svg";

export default function CouponSuccess() {
  return (
    <>
      <div className="container-fluid bg-white px-[17px]">
        <div className="bg-white">
          <p className="text-[#209FED] text-[28px] pt-[24px] text-center">
            ขอบคุณที่ซื้อผลิตภัณฑ์ของเรา
          </p>
          <div className="logoDog mt-[16px]">
            <img src={LogoDog} alt="logo" className="" />
          </div>
          <div>
            <p className=" text-[#8F8F8F] text-[20px] text-center leading-[100%] mt-[16px]">
              หากป้อนผลิตภัณฑ์น้องหมาแล้ว
              <br />
              คุณสามารถตั้งแจ้งเตือนป้อนผลิตภัณฑ์
              <br />
              ให้กับน้องหมาในครั้งต่อไป
            </p>
          </div>
          <div className="btn-nb mt-[40px] pb-[32px]">
            <button className="btn-next-time">
              <img src={IconTime} alt="logo" className="" />
              ตั้งเวลาแจ้งเตือนป้อนผลิตภัณฑ์
            </button>
            <button className="btn-back-coupon">กลับไปหน้าคูปองของฉัน</button>
          </div>
        </div>
      </div>
    </>
  );
}
