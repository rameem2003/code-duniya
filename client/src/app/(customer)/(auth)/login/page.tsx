"use client";
import Container from "@/components/layout/Container";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <main className="">
      <Container>
        <div className=" min-h-[900px] flex items-center justify-center flex-col">
          <h3 className=" font-cd-bangla text-[30px] font-bold text-cd-primary text-center">
            আমন্ত্রণ আপনাকে
          </h3>

          <h2 className=" font-cd-bangla text-[36px] font-extrabold text-cd-primary text-center">
            আপনার অ্যাকাউন্টে লগইন করুন
          </h2>

          <p className=" font-cd-bangla text-[20px] text-cd-primary text-center mt-4">
            আপনার ইমেইল এবং পাসওয়ার্ড দিয়ে লগইন করুন
          </p>

          <section className=" mt-10 max-w-[550px] w-full p-4 rounded-lg shadow-xl">
            <form
              //   action="http://localhost:5000/api/v1/auth/login"
              method="post"
              className=" flex flex-col w-full "
            >
              <div className="grid w-full items-center gap-3">
                <Label
                  className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                  htmlFor="email"
                >
                  আপনার ইমেইল
                </Label>
                <Input
                  className=" font-cd-poppins font-medium w-full block"
                  type="email"
                  id="email"
                  placeholder="ইমেইল"
                />
              </div>

              <div className="grid w-full items-center gap-3 mt-5">
                <Label
                  className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                  htmlFor="password"
                >
                  আপনার পাসওয়ার্ড
                </Label>
                <Input
                  className=" font-cd-poppins font-medium w-full block"
                  type="password"
                  id="password"
                  placeholder="পাসওয়ার্ড"
                />
              </div>

              <Button
                type="submit"
                className="bg-cd-primary cursor-pointer mt-8"
              >
                লগইন করুন
              </Button>
            </form>

            <div className=" mt-5 flex items-center justify-between">
              <Link
                className=" text-cd-primary font-cd-bangla text-base font-semibold"
                href="/register"
              >
                নতুন অ্যাকাউন্ট তৈরি করুন
              </Link>

              <Link
                className=" text-cd-primary font-cd-bangla text-base font-semibold"
                href="/forgot-password"
              >
                পাসওয়ার্ড ভুলে গেছেন
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default page;
