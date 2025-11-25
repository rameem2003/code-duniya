"use client";
import Container from "@/components/layout/Container";
import React, { useEffect } from "react";
import LoadingComponent from "@/components/shared/LoadingComponent";
import Image from "next/image";
import Link from "next/link";
import CouponApply from "./CouponApply";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

const page = () => {
  let { cart, loading, fetchCart, deleteCart, goToPurchase } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) {
    return (
      <div className=" py-[120px]">
        <Container>
          <h2 className=" font-cd-bangla text-[36px] font-bold text-black">
            কোর্স ইনফরমেশন পাওয়া যায়নি
          </h2>

          <Button asChild>
            <Link
              href="/"
              className=" cursor-pointer font-cd-bangla text-xl font-bold text-cd-primary"
            >
              হোম পেজ
            </Link>
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <main className="py-[120px]">
      {loading && <LoadingComponent />}
      <Container>
        <div className=" flex items-center justify-between flex-wrap">
          <div className="w-full md:w-10/12">
            <h2 className=" font-cd-bangla text-[36px] font-bold text-black">
              কোর্স ইনফরমেশন: {cart?.course.title}
            </h2>
          </div>
        </div>
        <section className=" mt-10">
          <div className="flex items-start justify-between gap-5 flex-wrap md:flex-nowrap">
            <div className="w-full lg:w-5/12">
              <Image
                className="w-full"
                src={cart?.course.thumb as string}
                alt="thumbnail"
                width={500}
                height={500}
              />
            </div>

            <div className="w-full lg:w-7/12">
              <Table>
                <TableBody>
                  <TableRow className="">
                    <TableCell className="font-medium text-xl font-cd-poppins">
                      Course Selling Price
                    </TableCell>

                    <TableCell className="text-right text-xl font-cd-poppins">
                      {cart?.course.sellingPrice} BDT
                    </TableCell>
                  </TableRow>
                  <TableRow className="">
                    <TableCell className="font-medium text-xl font-cd-poppins">
                      Course Discount Price
                    </TableCell>

                    <TableCell className="text-right text-xl font-cd-poppins">
                      {cart?.course?.discountedPrice > 0
                        ? cart?.course.discountedPrice
                        : cart?.course.sellingPrice}{" "}
                      BDT
                    </TableCell>
                  </TableRow>

                  <TableRow className="">
                    <TableCell className="font-medium text-xl font-cd-poppins">
                      Coupon Discount{" "}
                      <span className="text-gray-500 font-normal">
                        {cart?.coupon}
                      </span>
                    </TableCell>

                    <TableCell className="text-right text-xl font-cd-poppins">
                      {cart?.discount} BDT
                    </TableCell>
                  </TableRow>

                  <TableRow className="">
                    <TableCell className="font-medium text-xl font-cd-poppins">
                      Course Final Price
                    </TableCell>

                    <TableCell className="text-right text-xl font-cd-poppins">
                      {cart?.finalPrice > 0
                        ? cart?.finalPrice
                        : cart?.course.discountedPrice > 0
                        ? cart?.course.discountedPrice
                        : cart?.course.sellingPrice}{" "}
                      BDT
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <CouponApply />

              <div className="flex items-center justify-between mt-2 gap-2">
                <Button
                  onClick={goToPurchase}
                  variant={"default"}
                  className="bg-cd-primary hover:bg-green-500 cursor-pointer text-white w-[49%]"
                >
                  কনফার্ম
                </Button>
                <Button
                  onClick={deleteCart}
                  variant={"destructive"}
                  className="bg-cd-primary cursor-pointer text-white w-[49%]"
                >
                  বাতিল করুন
                </Button>
              </div>
            </div>
          </div>

          <div className=" mt-10"></div>
        </section>
      </Container>
    </main>
  );
};

export default page;
