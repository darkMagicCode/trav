'use client';
import React, { useEffect, useState } from "react";
import { useToast } from "./use-toast";
import { useCart } from "@/context/CartContext";
import { Button } from "./button";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

const initialCart: CartItem[] = [];

const ShopCard: React.FC = () => {
  const { state, dispatch } = useCart();
  const { toast } = useToast()

  const removeFromCart = (item: any) => {

    dispatch({ type: "REMOVE_FROM_CART", id: item.id });
    toast({
      title: "Removed from cart",
      description: `${item.name} has been removed from your cart.`,
    })
  };
  const checkOutFromCart = (item: any) => {
    toast({
      title: "checked out from cart",
      description: `all items has been checked out from your cart.`,
    })
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPrice = state.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className=" p-6 rounded shadow-md bg-background dark:text-primary ">
      <h2 className="text-lg font-semibold mb-4 ">Shopping Cart</h2>
      {state.length === 0 ? (
        <p className="">Your cart is empty.</p>
      ) : (
        <ul className="mb-4 ">
          {state.map((item , index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 "
            >
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item)}
                className="text-red-500 hover:text-red-600 focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="text-lg font-semibold dark:text-primary">Total: ${totalPrice}</p>
      <Button
      variant={"default"}
        onClick={checkOutFromCart}
        className=""
      >
        Checkout
      </Button>
    </div>
  );
};

export default ShopCard;
