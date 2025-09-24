"use client";
import React, { useState } from "react";
import Container from "@/components/layout/Container";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailCheck } from "lucide-react";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const { forgotPassword, msg, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await forgotPassword(email);
  };

  if (msg) {
    return (
      <div className=" min-h-[900px] flex items-center justify-center flex-col">
        <Card className="w-full max-w-md mx-auto mt-6 shadow-lg border border-slate-200">
          <CardHeader className="flex flex-col items-center text-center space-y-2">
            <MailCheck className="w-10 h-10 text-black" />
            <h2 className="text-xl font-semibold font-cd-bangla">
              রিকোয়েস্ট সফল
            </h2>
          </CardHeader>

          <CardContent className="text-center text-sm text-slate-600">
            <p className=" font-cd-bangla mt-2 text-lg">
              আমরা আপনার ইমেইলে একটি পাসওয়ার্ড রিসেট লিঙ্ক পাঠিয়েছি। চালিয়ে যেতে
              আপনার ইমেইল ইনবক্স (এবং স্প্যাম ফোল্ডার) চেক করুন।
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <main className="">
      <Container>
        <div className=" min-h-[900px] flex items-center justify-center flex-col">
          <h2 className=" font-cd-bangla text-[36px] font-extrabold text-cd-primary text-center">
            আপনার অ্যাকাউন্ট পুনরুদ্ধার করুন
          </h2>

          <p className=" font-cd-bangla text-[20px] text-cd-primary text-center mt-4">
            আপনার ইমেইল প্রদান করুন
          </p>

          <section className=" mt-10 max-w-[550px] w-full p-4 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className=" flex flex-col w-full ">
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

              <Button
                disabled={loading}
                type="submit"
                className="bg-cd-primary cursor-pointer mt-8"
              >
                {loading ? "অপেক্ষা করুন..." : "পুনরুদ্ধার করুন"}
              </Button>
            </form>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default page;
