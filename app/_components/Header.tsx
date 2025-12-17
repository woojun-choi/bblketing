'use client';

import Image from 'next/image';
import Link from 'next/link';

import logoWhite from '@/app/assets/logo_white.svg';
import inquiryBtn from '@/app/assets/inquiry_header_btn.svg';

export default function Header() {
  return (
    <header className="w-full z-[999] fixed top-0 left-0 right-0">
      {/* 배경 레이어 (multiply) */}
      <div
        className="absolute inset-0 bg-[#363636]"
        style={{ 
          mixBlendMode: 'multiply',
          opacity: 0.8
        }}
      ></div>

      {/* 컨텐츠 레이어 (로고 + 버튼) */}
      <div className="relative px-6 md:px-20 w-full max-w-[1920px] h-[95px] md:h-[95px] flex items-center justify-between mx-auto z-10">
        {/* 로고 */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoWhite}
            alt="BBLKETING Logo"
            width={163}
            height={36}
            className="w-auto h-[37px] px-5 md:h-[42px] cursor-pointer"
            priority
            quality={100}
            unoptimized
          />
        </Link>

        {/* 문의하기 버튼 */}
        <Link
          href="https://bit.ly/4qpx59b"
          target="_blank"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={inquiryBtn}
            alt="지금 문의하기"
            width={160}
            height={58}
            className="w-auto h-[52px] px-5 md:h-[57px]"
            quality={100}
            unoptimized
          />
        </Link>
      </div>
    </header>
  );
}