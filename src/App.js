import React from "react";
import Layouts from "./layout/Layout";
import LoadingMain from "./components/dialog/LoadingMain";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Test from "./pages/coupon/test";

import "./App.css";
import CouponListing from "./pages/coupon/Coupon-Listing";
import CouponListingNoItem from "./pages/coupon/Coupon-Listing-No-Item";
import HistoryCoupon from "./pages/coupon/History-Coupon";
import CouponCondition from "./pages/coupon/Coupon-Condition";
import CouponCondition2 from "./pages/coupon/Coupon-Condition2";
import UseCoupon from "./pages/coupon/Use-Coupon";
import CouponSuccess from "./pages/coupon/Coupon-Success";
import ThankYou from "./pages/coupon/Thank-You";
const theme = createTheme({
  typography: {
    fontFamily: `'DB Helvethaica X'`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layouts>
        <LoadingMain /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coupon-listing" element={<CouponListing />} />
        <Route path="/test" element={<Test />} />
        <Route path="/no-item" element={<CouponListingNoItem />} />
        <Route path="/history-coupon" element={<HistoryCoupon />} />
        <Route path="/coupon-condition" element={<CouponCondition />} />
        <Route path="/coupon-condition2" element={<CouponCondition2 />} />
        <Route path="/use-coupon" element={<UseCoupon />} />
        <Route path="/coupon-success" element={<CouponSuccess />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      {/* </Layouts> */}
    </ThemeProvider>
  );
}

export default App;
