import React from "react";
import ProfileForm from "./ProfileForm";
import ProfileImageComponent from "./ProfileImageComponent";
import PasswordUpdate from "./PasswordUpdate";

const page = () => {
  return (
    <section className=" mt-5">
      <div className="w-full max-w-6xl p-3  mx-auto shadow-lg">
        <div className=" flex items-start gap-4 flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 lg:w-7/12">
            <ProfileForm />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12">
            <ProfileImageComponent />
          </div>
        </div>

        <PasswordUpdate />
      </div>
    </section>
  );
};

export default page;
