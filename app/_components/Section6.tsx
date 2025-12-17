'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import backImage from '@/app/assets/06-back.png';
import titleImage from '@/app/assets/06-title.png';
import contentsImage from '@/app/assets/06-contents.png';
import mBackImage from '@/app/assets/06-m-back.png';
import mTitleImage from '@/app/assets/06-m-title.png';
import mContentsImage from '@/app/assets/06-m-contents.png';
import inqHeroBtn from '@/app/assets/inquiry_hero_btn.png';

export default function Section6() {
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
      <div className="hidden md:block relative w-full h-[1267px]">
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
            alt="쁠케팅은 대표님께서 영웅이 되길 진심으로 바랍니다"
            width={743}
            height={135}
            className="el w-full max-w-[743px] h-auto mb-20 -py-8 mt-8"
          />

          {/* 컨텐츠 */}
          <Image
            src={contentsImage}
            alt="6가지 약속"
            width={850}
            height={537}
            className="el w-full max-w-[850px] h-auto mb-12 py-2"
          />

          {/* 구하기 버튼 */}
          <Link
            href="https://bit.ly/4qpx59b"
            target="_blank"
            className="el hover:scale-105 transition-transform duration-300 py-12"
          >
            <Image
              src={inqHeroBtn}
              alt="지금 구하러 가기"
              width={400}
              height={100}
              className="w-auto h-[101px]"
            />
          </Link>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="block md:hidden relative w-full min-h-screen">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={mBackImage}
            alt="Background"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        {/* 컨텐츠 */}
        <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-16 px-6 ">
          {/* 타이틀 */}
          <Image
            src={mTitleImage}
            alt="쁠케팅은 대표님께서 영웅이 되길 진심으로 바랍니다"
            width={925}
            height={165}
            className="el w-full max-w-[925px] h-auto mb-12 mt-6"
          />

          {/* 컨텐츠 */}
          <Image
            src={mContentsImage}
            alt="6가지 약속"
            width={1058}
            height={669}
            className="el w-full max-w-[1058px] h-auto mb-6 py-14"
          />

          {/* 구하기 버튼 */}
          <Link
            href="https://bit.ly/4qpx59b"
            target="_blank"
            className="el hover:scale-105 transition-transform duration-300 mb-10"
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
      </div>
    </section>
  );
}