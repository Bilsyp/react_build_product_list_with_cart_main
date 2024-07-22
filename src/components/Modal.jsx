import React from "react";
import CardCart from "./CardCart";

const Modal = (props) => {
  return (
    <div className="fixed h-full w-full left-0 top-0  bg-[rgba(0,0,0,0.7)] flex flex-col  justify-end Ds:justify-center Ds:flex-row items-center">
      <CardCart {...props} type="modal" />
    </div>
  );
};

export default Modal;
