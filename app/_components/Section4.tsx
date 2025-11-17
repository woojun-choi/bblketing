'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import titleImage from '@/app/assets/04-title.png';
import contentsImage from '@/app/assets/04-contents.png';
import mTitleImage from '@/app/assets/04-m-title.png';
import mContentsImage from '@/app/assets/04-m-contents.png';
import inqHeroBtn from '@/app/assets/inquiry_hero_btn.png';

export default function Section4() {
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
    <section ref={sectionRef} className="relative w-full bg-[#222222]">
      {/* PC 버전 */}
      <div className="hidden md:flex flex-col items-center justify-center py-20 px-6 min-h-[1281px]">
        {/* 타이틀 */}
        <Image
          src={titleImage}
          alt="이제! 대표님께서 사기 업체들로부터 사람들을 구할 때입니다"
          width={915}
          height={265}
          className="el w-full max-w-[915px] h-auto mb-16"
        />

        {/* 컨텐츠 */}
        <Image
          src={contentsImage}
          alt="3단계 프로세스"
          width={943}
          height={435}
          className="el w-full max-w-[943px] h-auto mb-16"
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
      <div className="flex md:hidden flex-col items-center justify-center py-16 px-6">
        {/* 타이틀 */}
        <Image
          src={mTitleImage}
          alt="이제! 대표님께서 사기 업체들로부터 사람들을 구할 때입니다"
          width={825}
          height={323}
          className="el w-full max-w-[825px] h-auto mb-12"
        />

        {/* 컨텐츠 */}
        <div className="el w-full max-w-[600px] mb-12 overflow-hidden">
          <Image
            src={mContentsImage}
            alt="3단계 프로세스"
            width={1143}
            height={527}
            className="w-full h-auto"
          />
        </div>

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
            className="w-auto h-[80px]"
          />
        </Link>
      </div>
    </section>
  );
}