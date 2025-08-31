"use client";
import Container from "@/components/layout/Container";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const { user, register, loading, msg } = useAuth();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(name, phone, email, password);
  };

  useEffect(() => {
    if (user?.id) {
      router.push("/");
    }
  }, [user]);

  return (
    <main className="">
      <Container>
        <div className=" min-h-[900px] flex items-center justify-center flex-col">
          <h3 className=" font-cd-bangla text-[36px] font-extrabold text-cd-primary text-center">
            কোড দুনিয়ায় আপনাকে স্বাগতম
          </h3>

          <h2 className=" font-cd-bangla text-[30px] font-medium text-cd-primary text-center">
            একটি নতুন অ্যাকাউন্ট তৈরি করুন
          </h2>

          <section className=" mt-10 max-w-[550px] w-full p-4 rounded-lg shadow-xl">
            <div className=" mb-5">
              {msg && (
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>{msg}</AlertTitle>
                </Alert>
              )}
            </div>
            <form onSubmit={handleRegister} className=" flex flex-col w-full ">
              <div className="grid w-full items-center gap-3 ">
                <Label
                  className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                  htmlFor="name"
                >
                  আপনার নাম
                </Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className=" font-cd-poppins font-medium w-full block"
                  type="name"
                  id="name"
                  placeholder="নাম"
                />
              </div>
              <div className="grid w-full items-center gap-3 ">
                <Label
                  className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                  htmlFor="phone"
                >
                  আপনার মোবাইল নম্বর
                </Label>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className=" font-cd-poppins font-medium w-full block"
                  type="phone"
                  id="phone"
                  placeholder="মোবাইল নম্বর"
                />
              </div>
              <div className="grid w-full items-center gap-3 mt-5">
                <Label
                  className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                  htmlFor="email"
                >
                  আপনার ইমেইল
                </Label>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className=" font-cd-poppins font-medium w-full block"
                  type="password"
                  id="password"
                  placeholder="পাসওয়ার্ড"
                />
              </div>

              <Button
                disabled={loading}
                type="submit"
                className="bg-cd-primary cursor-pointer mt-8"
              >
                অ্যাকাউন্ট রেজিস্টার করুন
              </Button>
            </form>

            <div className=" mt-5 flex items-center justify-between">
              <Link
                className=" text-cd-primary font-cd-bangla text-base font-semibold"
                href="/login"
              >
                লগইন করুন
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default page;
