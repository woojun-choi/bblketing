'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import titleImage from '@/app/assets/08-title.png';
import mTitleImage from '@/app/assets/08-m-title.png';
import contents01 from '@/app/assets/08-contents-01.png';
import contents02 from '@/app/assets/08-contents-02.png';
import contents03 from '@/app/assets/08-contents-03.png';
import inqHeroBtn from '@/app/assets/inquiry_hero_btn.png';

export default function Section8() {
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
    <section ref={sectionRef} className="relative w-full bg-[#161616]">
      {/* PC 버전 */}
      <div className="hidden md:flex flex-col items-center justify-center py-45 px-6 -mb-4">
        {/* 타이틀 */}
        <Image
          src={titleImage}
          alt="저희는 무작정 포스팅만 하지않습니다"
          width={861}
          height={195}
          className="el w-full max-w-[861px] h-auto mb-20"
        />

        {/* Step 카드들 - 가로 배치 */}
        <div className="flex flex-row gap-8 justify-center items-start mb-20 max-w-[1400px] w-full">
          <Image
            src={contents01}
            alt="STEP 01 - USP 세팅 및 키콘텐츠"
            width={415}
            height={649}
            className="el w-full max-w-[415px] h-auto"
          />
          <Image
            src={contents02}
            alt="STEP 02 - 브랜드 블로그 운영"
            width={415}
            height={649}
            className="el w-full max-w-[415px] h-auto"
          />
          <Image
            src={contents03}
            alt="STEP 03 - 블로그 스킨 디자인"
            width={415}
            height={649}
            className="el w-full max-w-[415px] h-auto"
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
            className="w-auto h-[100px]"
          />
        </Link>
      </div>

      {/* 모바일 버전 */}
      <div className="flex md:hidden flex-col items-center justify-center py-32 px-6 ">
        {/* 타이틀 */}
        <Image
          src={mTitleImage}
          alt="저희는 무작정 포스팅만 하지않습니다"
          width={910}
          height={366}
          className="el w-full max-w-[910px] h-auto mb-16"
        />

        {/* Step 카드들 - 세로 배치 */}
        <div className="flex flex-col gap-6 items-center mb-24 w-full max-w-[500px]">
          <Image
            src={contents01}
            alt="STEP 01 - USP 세팅 및 키콘텐츠"
            width={415}
            height={649}
            className="el w-full h-auto"
          />
          <Image
            src={contents02}
            alt="STEP 02 - 브랜드 블로그 운영"
            width={415}
            height={649}
            className="el w-full h-auto"
          />
          <Image
            src={contents03}
            alt="STEP 03 - 블로그 스킨 디자인"
            width={415}
            height={649}
            className="el w-full h-auto"
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
            className="w-auto h-[120px]"
          />
        </Link>
      </div>
    </section>
  );
}