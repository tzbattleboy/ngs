import React, { useState } from "react";
import TopBanner from "../../components/layout/TopBanner";
import TopLogo from "../../components/layout/TopLogo";
import { TextField } from "@mui/material";

export default function UseCoupon() {
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
          <div className="use-detail ">
            <p className="text-[20px] text-[#FF2B1E] text-center leading-[92%]">
              ใช้คูปองที่หน้าร้านเท่านั้น
            </p>
            <p className="text-[32px] text-[#393939] text-center">
              ส่วนลด 10% สำหรับซื้อผลิตภัณฑ์
            </p>
            <p className="text-center text-gray-400 leading-[92%]">
              ใช้คูปองได้ถึง 21/01/2565
            </p>
            <div>
              <div className="coupon-detail mt-[73px] text-[18px] ">
                <p className="text-[#393939] text-[24px]">
                  กรอกรหัสร้านค้า (สอบถามได้ที่พนักงาน)
                  <strong className="text-[red]">*</strong>
                </p>
                <div className="mt-[16px] w-full">
                  <TextField
                    style={{ width: "100%" }}
                    required
                    id="standard-required"
                    label="รหัสร้านค้า"
                    defaultValue=" "
                    variant="standard"
                  />
                </div>
              </div>
            </div>
            <p className="text-[#393939] text-[20px] text-center mt-[200px] leading-[100%]">
              คุณต้องการใช้คูปองนี้ทันทีใช่หรือไม่? <br />
              หากกดใช้คูปองแล้วจะไม่สามารถกลับมาใช้ได้อีก
            </p>
            <div className="btn-use mt-[20px] mb-[32px]">
              <button className="btn-cancel">ยกเลิก</button>
              <button className="btn-use-coupon">ใช้คูปอง</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
