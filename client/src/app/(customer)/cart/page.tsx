import Container from "@/components/layout/Container";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { cartType } from "@/types/type";
import { getCart } from "@/lib/cartApi";
import { redirect } from "next/navigation";

const page = async () => {
  let data = await getCart();
  let cart: cartType = data.data;

  {
    !cart && redirect("/");
  }
  return (
    <main className="py-[120px]">
      <Container>
        <div className=" flex items-center justify-between">
          <div className="w-10/12">
            <h2 className=" font-cd-bangla text-[36px] font-bold text-black">
              কোর্স ইনফরমেশন: {cart.course.title}
            </h2>
          </div>
          <div className="w-2/12">
            <Image
              className=" ml-auto"
              src={cart.course.thumb}
              alt="thumbnail"
              width={100}
              height={100}
            />
          </div>
        </div>

        <section className=" mt-10">
          <Table>
            <TableBody>
              <TableRow className="">
                <TableCell className="font-medium text-xl font-cd-poppins">
                  Course Selling Price
                </TableCell>

                <TableCell className="text-right text-xl font-cd-poppins">
                  {cart.course.discountedPrice > 0
                    ? cart.course.discountedPrice
                    : cart.course.sellingPrice}{" "}
                  BDT
                </TableCell>
              </TableRow>
              <TableRow className="">
                <TableCell className="font-medium text-xl font-cd-poppins">
                  Course Discount Price
                </TableCell>

                <TableCell className="text-right text-xl font-cd-poppins">
                  {cart.discount} BDT
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </Container>
    </main>
  );
};

export default page;
