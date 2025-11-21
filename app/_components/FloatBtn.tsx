"use client";

import Image from "next/image";
import Link from "next/link";
import floatAsk from "@/app/assets/float-ask.png";

export default function FloatBtn() {
  return (
    <Link
      href="https://bit.ly/4qpx59b"
      target="_blank"
      className="fixed z-[50] bottom-[40px] -right-4 md:right-6 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <Image
        src={floatAsk}
        alt="문의하기"
        width={158}
        height={158}
        className="min-w-[110px] md:min-w-[130px] w-[15%] max-w-[175px] h-auto"
      />
    </Link>
  );
}