import React from "react";
import { CircleXIcon } from "lucide-react";
import { removeCartById } from "@/features/dessert/dessertSlice";
import { useDispatch } from "react-redux";

import { formatCurrency } from "@/utils";
const CardCart = ({
  setConfirm,
  getItemDetails,
  confirmOrder,
  type,
  calculateTotal,
  items,
  cart,
}) => {
  const dispatch = useDispatch();

  const isModal = type == "modal";
  return (
    <div
      className={`${
        isModal
          ? "bg-white w-full h-[90%] Ds:h-[80%] overflow-y-scroll  Ds:w-[50%] rounded-md p-10"
          : ""
      } flex flex-col gap-4`}
    >
      {isModal && (
        <div>
          <img src="/images/icon-order-confirmed.svg" alt="" />
          <h1 className="text-5xl py-4 font-bold">
            Order <span className="block Ds:inline">Confirmed </span>
          </h1>
          <p className=" font-light">We hope you enjoy your food</p>
        </div>
      )}
      <div className="bg-[#FCF8F5] rounded-md px-3  ">
        {items.map((item, idx) => {
          const { count, totalPrice } = getItemDetails(item.name);
          return (
            <div
              key={idx}
              className="item-cart  p-2 rounded-md border-b-2 flex justify-between items-center"
            >
              <div className="item-info  flex justify-center items-center gap-3  ">
                <img
                  className="rounded-xl  w-16 "
                  src={item.image.thumbnail}
                  alt=""
                />
                <div>
                  <h2>{item.name}</h2>
                  <h3 className="py-3  font-bold text-[#B43F14]">
                    {count}x{" "}
                    <span className="pl-3 text-[#9D8C89]">
                      @ {formatCurrency(item.price)}
                    </span>
                    <span className="pl-4">{formatCurrency(totalPrice)}</span>
                  </h3>
                </div>
              </div>

              <button
                onClick={() => dispatch(removeCartById(item.id))}
                className=""
              >
                <CircleXIcon />
              </button>
            </div>
          );
        })}
      </div>
      <div className="text-xl total flex justify-between items-center  font-semibold">
        <h2>Order Total</h2>
        <h2 className="font-bold">{formatCurrency(calculateTotal(cart))}</h2>
      </div>
      <div
        className={`${
          isModal ? "hidden" : ""
        }  delivery flex items-center justify-center bg-[#FCF8F5] rounded-lg p-3`}
      >
        <img src="/images/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
        <p className="text-sm text-center Ds:text-xl">
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button
        onClick={() => setConfirm(!confirmOrder)}
        className=" bg-[#B43F14] p-3 text-white font-semibold rounded-full bg"
      >
        {isModal ? "Start New Order" : "Confirm Order"}
      </button>
    </div>
  );
};

export default CardCart;
