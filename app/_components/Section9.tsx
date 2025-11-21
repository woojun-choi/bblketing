'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import backImage from '@/app/assets/09-back.png';
import titleImage from '@/app/assets/09-title.png';
import contentsImage from '@/app/assets/09-contents.png';
import mBackImage from '@/app/assets/09-m-back.png';
import mTitleImage from '@/app/assets/09-m-title.png';
import mContentsImage from '@/app/assets/09-m-contents.png';
import inqSelectBtn from '@/app/assets/inquiry_select_btn.png';

export default function Section9() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.el');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* PC 버전 */}
      <div className="hidden md:block relative w-full h-[1526px]">
        {/* 배경 이미지 */}
        <Image
          src={backImage}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />

        {/* 컨텐츠 */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
          {/* 타이틀 */}
          <Image
            src={titleImage}
            alt="대표님의 이름이 선택의 기준이 될 수 있도록"
            width={607}
            height={409}
            className="el w-full max-w-[607px] h-auto mb-20 mt-32"
          />

          {/* 컨텐츠 */}
          <Image
            src={contentsImage}
            alt="쁠케팅 BBLKETING"
            width={779}
            height={433}
            className="el w-full max-w-[779px] h-auto mb-20 "
          />

          {/* 선택 버튼 */}
          <Link
            href="https://bit.ly/4qpx59b"
            target="_blank"
            className="el hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={inqSelectBtn}
              alt="선택의 기준 되러가기"
              width={400}
              height={100}
              className="w-auto h-[100px]"
            />
          </Link>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="block md:hidden relative w-full h-full">
        {/* 배경 이미지 */}
        <Image
          src={mBackImage}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />

        {/* 컨텐츠 */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-16 px-6">
          {/* 타이틀 */}
          <Image
            src={mTitleImage}
            alt="대표님의 이름이 선택의 기준이 될 수 있도록"
            width={768}
            height={517}
            className="el w-full max-w-[768px] h-auto mb-32 mt-12"
          />

          {/* 컨텐츠 */}
          <Image
            src={mContentsImage}
            alt="뿔케팅 BBLKETING"
            width={985}
            height={548}
            className="el w-full max-w-[985px] h-auto mb-32"
          />

          {/* 선택 버튼 */}
          <Link
            href="https://bit.ly/4qpx59b"
            target="_blank"
            className="el hover:scale-101 transition-transform duration-300"
          >
            <Image
              src={inqSelectBtn}
              alt="선택의 기준 되러가기"
              width={400}
              height={100}
              className="w-auto h-[120px] mb-16"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}