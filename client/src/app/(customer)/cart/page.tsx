"use client";
import Container from "@/components/layout/Container";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { cartType } from "@/types/type";
import { getCart } from "@/lib/cartApi";
import CouponApply from "./CouponApply";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [cart, setCart] = useState<cartType>();

  const fetchCart = async () => {
    try {
      let res = await getCart();
      console.log(res);

      setCart(res.data);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) {
    return <h2>Loading</h2>;
  }

  return (
    <main className="py-[120px]">
      <Container>
        <div className=" flex items-center justify-between">
          <div className="w-10/12">
            <h2 className=" font-cd-bangla text-[36px] font-bold text-black">
              কোর্স ইনফরমেশন: {cart?.course.title}
            </h2>
          </div>
          <div className="w-2/12">
            <Image
              className="ml-auto"
              src={cart?.course.thumb as string}
              alt="thumbnail"
              width={100}
              height={100}
            />
          </div>
        </div>
        <section className=" mt-10">
          <div className="flex items-start justify-between gap-5">
            <div className="w-full lg:w-5/12">
              <Image
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
            </div>
          </div>

          <div className=" mt-10"></div>
        </section>
        wef
      </Container>
    </main>
  );
};

export default page;
