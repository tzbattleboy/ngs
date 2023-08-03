import Dialog from "@mui/material/Dialog";
import "../../loading-main.css";
import { useSelector } from "react-redux";
export default function LoadingMain() {
  const store = useSelector((state) => state.loading);
  return (
    <>
      <Dialog
        open={store.loading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="loading-main flex flex-col text-center px-[0px] py-[0px]">
          <div className="lds-roller box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text-white text-[14px] leading-5 mt-[2px] mb-[4px]">
            Loading
          </p>
        </div>
      </Dialog>
    </>
  );
}
