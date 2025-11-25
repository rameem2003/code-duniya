"use client";
import Container from "@/components/layout/Container";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const page = () => {
  const { user, msg, login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
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
            <div className=" mb-5">
              {msg && (
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertTitle>{msg}</AlertTitle>
                </Alert>
              )}
            </div>
            <form onSubmit={handleLogin} className=" flex flex-col w-full ">
              <div className="grid w-full items-center gap-3">
                <Label
                  className=" text-cd-primary font-cd-bangla text-[20px] font-semibold"
                  htmlFor="email"
                >
                  আপনার ইমেইল
                </Label>
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
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
