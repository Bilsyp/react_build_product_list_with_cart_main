import React, { useState } from "react";
import { useSelector } from "react-redux";
import { filterDuplicates } from "@/utils";
import Modal from "./Modal";
import CardCart from "./CardCart";
const Cart = () => {
  const [confirmOrder, setConfirm] = useState(false);
  const { cart } = useSelector((state) => state.dessert);
  // Filter duplicates once
  const items = React.useMemo(() => filterDuplicates(cart, "name"), [cart]);

  // Calculate total price for the cart
  const calculateTotal = React.useCallback(
    (arr) => arr.reduce((sum, item) => sum + item.price, 0),
    []
  );

  // Calculate the count and total price per item
  const getItemDetails = React.useCallback(
    (name) => {
      const filteredItems = cart.filter((item) => item.name === name);
      const count = filteredItems.length;
      const totalPrice = filteredItems.reduce(
        (sum, item) => sum + item.price,
        0
      );
      return { count, totalPrice };
    },
    [cart]
  );
  const propsCart = {
    getItemDetails,
    calculateTotal,
    setConfirm,
    items,
    confirmOrder,
    cart,
  };
  return (
    <div className="card bg-white p-5 rounded-md ">
      <div className="card-header relative">
        <h1 className="text-3xl pb-3 font-bold text-[#B43F14]">
          Your Cart ({cart.length})
        </h1>
        {confirmOrder && <Modal {...propsCart} />}
        {cart.length > 0 ? (
          <CardCart {...propsCart} />
        ) : (
          <>
            <img
              src="/images/illustration-empty-cart.svg"
              alt="Empty cart illustration"
              className="w-[80%] Ds:w-[50%] mx-auto"
            />
            <p className="text-center text-xl font-semibold text-[#786869]">
              Your added items will appear here.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
