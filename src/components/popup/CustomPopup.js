import { Dialog } from "@mui/material";
import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";

export default function CustomPopup(props) {
  const {
    onClose,
    selectedValue,
    open,
    // confirmType = true,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth="xl">
      <div className="pb-[36px] pt-[24px] px-[23px] rounded-[4px]">
        {props.title && (
          <p className="text-[28px] text-center" style={{ color: "#209FED" }}>
            {props.title}
          </p>
        )}
        <p className="text-gray text-[18px] text-center whitespace-pre-line leading-[120%]">
          {props.desc}
        </p>
        <div className="flex itesm-center gap-[13px] justify-center mt-[24px]">
          {props.cancelFunction && (
            <SecondaryButton
              variant="outlined"
              className={props.actionFunction ? "w-full" : "w-1/2"}
              onClick={() => props.cancelFunction()}
            >
              {props.cancelText ? props.cancelText : "ยกเลิก"}
            </SecondaryButton>
          )}
          {props.actionFunction && (
            <PrimaryButton
              onClick={() => props.actionFunction()}
              variant="outlined"
              className="w-full"
            >
              {props.actionText ? props.actionText : "บันทึก"}
            </PrimaryButton>
          )}
        </div>
      </div>
    </Dialog>
  );
}
