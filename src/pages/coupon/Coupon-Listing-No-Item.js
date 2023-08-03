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
import NoItem from "../../assets/images/No-Item.png";
export default function CouponListingNoItem() {
  return (
    <>
      <div>
        <TopLogo />
        <TopBanner type="Coupon" />
        <div className="container-coupon">
          <div>
            <div className="container ">
              <div className="bg-list">
                <div className="card">
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
                </div>
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
                  <div className="card-coupon mt-[-5px] mb-[20px] h-[250px]">
                    <img className="mt-[58px]" src={NoItem} alt="" />
                    <p className="text-[24px] mt-[10px]">
                      ยังไม่มีคูปองที่ใช้ได้ในขณะนี้
                    </p>
                    <p className="text-[16px] text-center px-[45px]">
                      กรุณากลับมาเช็กคูปองของท่านอีกครั้งในโอกาศหน้า
                      หรือติดตามข่าวสารจาก Line @spectrafordog
                    </p>
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
