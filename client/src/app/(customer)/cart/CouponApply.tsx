"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/useCart";

import React, { useState } from "react";

const CouponApply = () => {
  const { applyCoupon } = useCart();
  const [coupon, setCoupon] = useState<string>("");

  const handleApplyCoupon = () => {
    applyCoupon(coupon);
  };
  return (
    <div className="w-full">
      <div className=" mt-4 w-full">
        <div className="flex items-center justify-between gap-2 w-full">
          <Input
            onChange={(e) => setCoupon(e.target.value)}
            value={coupon}
            className=" border-2 border-cd-primary placeholder:text-cd-primary"
            type="text"
            placeholder="Enter Coupon Code"
          />
          <Button
            onClick={handleApplyCoupon}
            className=" bg-cd-primary text-white font-cd-poppins"
          >
            ছাড় কুপন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CouponApply;
