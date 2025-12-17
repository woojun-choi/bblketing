'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import titleImage from '@/app/assets/05-title.png';
import contentsImage from '@/app/assets/05-contents.png';
import mTitleImage from '@/app/assets/05-m-title.png';
import mContentsImage from '@/app/assets/05-m-contents.png';
import inqHeroBtn from '@/app/assets/inquiry_hero_btn.png';

export default function Section5() {
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
    <section ref={sectionRef} className="relative w-full bg-[#ECE9FF]">
      {/* PC 버전 */}
      <div className="hidden md:flex flex-col items-center justify-center py-20 px-6 min-h-[1680px]">
        {/* 타이틀 */}
        <Image
          src={titleImage}
          alt="대표님께 고객은, 이렇게 구해집니다"
          width={915}
          height={134}
          className="el w-full max-w-[915px] h-auto mb-16"
        />

        {/* 컨텐츠 */}
        <Image
          src={contentsImage}
          alt="디자인글북 FAQ"
          width={860}
          height={1014}
          className="el w-full max-w-[860px] h-auto mb-16"
        />

        {/* 구하기 버튼 */}
        <Link
          href="https://bit.ly/4qpx59b"
          target="_blank"
          className="el hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={inqHeroBtn}
            alt="지금 구하러 가기"
            width={400}
            height={100}
            className="w-auto h-[100px]"
          />
        </Link>
      </div>

      {/* 모바일 버전 */}
      <div className="flex md:hidden flex-col items-center justify-center py-22 min-h-[1200px]">
        {/* 타이틀 */}
        <Image
          src={mTitleImage}
          alt="대표님께 고객은, 이렇게 구해집니다"
          width={580}
          height={172}
          className="px-6 py-8 el w-full max-w-[380px] h-auto mb-12"
        />

        {/* 컨텐츠 */}
        <div className="el w-full mb-12 overflow-hidden px-0 -mx-6">
          <Image
            src={mContentsImage}
            alt="디자인글북 FAQ"
            width={1080}
            height={1297}
            className="w-full h-auto"
          />
        </div>

        {/* 구하기 버튼 */}
        <Link
          href="https://bit.ly/4qpx59b"
          target="_blank"
          className="el hover:scale-105 py-4 transition-transform duration-300"
        >
          <Image
            src={inqHeroBtn}
            alt="지금 구하러 가기"
            width={400}
            height={100}
            className="w-auto h-[100px]"
          />
        </Link>
      </div>
    </section>
  );
}