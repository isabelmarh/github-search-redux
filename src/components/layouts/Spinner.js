import React from "react";
import SpinImg from "./Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinImg}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Spinner;
