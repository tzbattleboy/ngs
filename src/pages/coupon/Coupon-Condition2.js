import React, { Component } from "react";
import TopBanner from "../../components/layout/TopBanner";
import TopLogo from "../../components/layout/TopLogo";

export default function CouponCondition2() {
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
          <div className="card-detail ">
            <p className="text-[20px] text-[#FF2B1E] text-center">
              ใช้คูปองที่หน้าร้านเท่านั้น
              <br /> จำนวนสิทธิในการใช้คูปองนี้ 50 สิทธิ
            </p>
            <p className="text-[24px] text-[#209FED] text-center">
              โรงพยาบาลสัตว์ทองหล่อ สาขาพระราม 2
            </p>
            <p className="text-[32px] text-[#393939] text-center">
              ส่วนลด 50 บาท สำหรับซื้อ ผลิตภัณฑ์
            </p>
            <p className="text-center text-gray-400">
              ใช้คูปองได้ถึง 21/01/2565
            </p>
            <hr className="divider mt-[24px]"></hr>
            <div>
              <p className="mt-[16px] text-[24px] text-[#209FED]">
                เงื่อนไขการใช้คูปอง
              </p>
              <div className="coupon-detail mt-[8px] text-[18px] ">
                <ul className="pl-[17px] ">
                  <li className=" list-disc   text-[#393939]">
                    คูปองไม่สามารถนำกลับมาใช้ได้ เมื่อเวลาที่แสดงหมดลง
                  </li>
                  <li className="list-disc   text-[#393939]">
                    เมื่อท่านกดใช้ต้องแสดง รหัส Unique Code <br />
                    กับพนักงานภายใน 10 นาที
                  </li>
                  <li className="list-disc   text-[#393939]">
                    หากปิดหน้าแสดงคูปองท่านจะไม่สามารถกลับมาใช้คูปองได้
                  </li>
                </ul>
              </div>
            </div>
            <div className="btn-nb mt-[113px] mb-[32px]">
              {/* <button className="btn-next">ต่อไป</button> */}
              <button className="btn-full">
                มีผู้ใช้คูปองเต็มจำนวนสิทธิแล้ว
              </button>
              <button className="btn-back">ย้อนกลับ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
