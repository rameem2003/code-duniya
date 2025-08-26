import Image from "next/image";
import Link from "next/link";
import React from "react";

const Advertisement = () => {
  return (
    <div className=" mb-10">
      <Link href="/">
        <Image
          src="/add.jpg"
          alt="Advertisement"
          width={1200}
          height={200}
          className=" w-full h-auto rounded-lg"
        />
      </Link>
    </div>
  );
};

export default Advertisement;
