import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export default function CustomSwitch(data) {
  const IOSSwitch = styled((props) => (
    <Switch
      checked={props.checked}
      onChange={props.onChange}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 58,
    height: 29,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      top: 1,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        right: 28,
        transform: "translateX(28px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#00B9F1" : "#00B9F1",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#00B9F1",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        // color:
        //   theme.palette.mode === "light"
        //     ? theme.palette.gray[100]
        //     : theme.palette.gray[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 17,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <IOSSwitch
      sx={{ m: 1 }}
      checked={data.checked}
      onChange={data.handleFunction}
    />
  );
}
