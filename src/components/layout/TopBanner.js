import DogCoupon from "../../assets/images/Coupon-Listing.png";
import React from "react";

export default function TopBanner({ type }) {
  let bannerImage;
  switch (type) {
    case "Coupon":
      bannerImage = DogCoupon;
      break;
    default:
      bannerImage = DogCoupon;
  }
  return (
    <>
      <div className="text-center">
        <img src={bannerImage} alt="logo" className="w-full" />
      </div>
    </>
  );
}
