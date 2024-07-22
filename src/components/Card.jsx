import React, { useId } from "react";
import { CirclePlus, ShoppingCart, CircleMinus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCartByName } from "@/features/dessert/dessertSlice";
import { formatCurrency } from "@/utils";
const Card = ({ data }) => {
  const id = useId();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.dessert);

  const getItemDetails = React.useCallback(
    (name) => {
      const filteredItems = cart.filter((item) => item.name === name);
      const count = filteredItems.length;
      return { count };
    },
    [cart]
  );
  const { count } = getItemDetails(data.name);

  return (
    <div className="card   mx-auto">
      <div className="card-header relative">
        <img
          className="rounded-2xl cursor-pointer hover:opacity-75"
          src={data.image.mobile}
          srcSet={`${data.image.mobile} 375w, ${data.image.desktop} 1440w`}
          sizes="(max-width: 375px) 375px, (min-width: 376px) and (max-width: 1440px) 1440px"
          alt="Responsive image"
        />

        {count > 0 ? (
          <div>
            <div className=" absolute top-[90%] bg-[#B43F14] py-3 left-[50%] translate-x-[-50%] w-[50%] rounded-full flex  justify-between px-3 items-center gap-3 font-bold border border-[#B43F14]  hover:bg-[#B43F14] text-md   group text-white">
              <button onClick={() => dispatch(addCart({ id, ...data }))}>
                <CirclePlus />
              </button>
              {count}
              <button onClick={() => dispatch(removeCartByName(data.name))}>
                <CircleMinus />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addCart({ id, ...data }))}
            className=" absolute top-[90%] bg-white py-3 left-[50%] translate-x-[-50%] w-[50%] rounded-full flex justify-center items-center gap-3 font-bold border border-[#B43F14]  hover:bg-[#B43F14] text-md   group hover:text-white"
          >
            <ShoppingCart className="inline  group-hover:text-white text-[#B43F14]" />{" "}
            <span>Add to Cart </span>
          </button>
        )}
      </div>
      <div className="card_content pt-8">
        <h3 className=" font-light">{data.category}</h3>
        <h2 className=" font-semibold">{data.name}</h2>
        <h2 className="text-[#B43F14] font-bold">
          {formatCurrency(data.price)}
        </h2>
      </div>
    </div>
  );
};

export default Card;
