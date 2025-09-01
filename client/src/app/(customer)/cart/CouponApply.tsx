"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCart from "@/hooks/useCart";
import React, { useState } from "react";

const CouponApply = () => {
  const [coupon, setCoupon] = useState<string>("");
  const { applyCoupon } = useCart();

  const handleApplyCoupon = () => {
    // e.preventDefault();
    applyCoupon(coupon);
  };
  return (
    <div>
      <div className=" mt-4">
        <div className="flex items-center justify-between gap-2">
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
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CouponApply;
