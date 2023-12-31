"use client"
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])
  return (
    <Link href={session?.user.isAdmin ? "/add" : "/cart"}>
      <div className="flex items-center gap-4">
        {session?.user.isAdmin ? (
          <button className="px-2 py-1 bg-red-500 text-white rounded-md">Add product</button>
        ) : (
          <span>Cart ({totalItems})</span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
