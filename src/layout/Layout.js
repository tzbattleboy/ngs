import React from "react";
function Layouts({ children }) {
  return (
    <>
      <div className="wrapper">
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layouts;
