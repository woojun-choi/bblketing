'use client';

import Image from 'next/image';
import Link from 'next/link';

import backImage from '@/app/assets/03-back.png';
import titleImage from '@/app/assets/03-title.png';
import contentsImage from '@/app/assets/03-contents.png';
import inqBtn from '@/app/assets/inquiry_btn.png';

export default function Section3() {
  return (
    <section className="relative w-full h-auto md:h-[1384px] flex items-center justify-center">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backImage}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 w-full max-w-[1920px] flex flex-col items-center justify-center py-20 md:py-0 px-6">
        {/* 타이틀 */}
        <Image
          src={titleImage}
          alt="인테리어 업계 망치는 사람들"
          width={743}
          height={138}
          className="w-full max-w-[743px] h-auto mb-12 md:mb-16 el"
        />

        {/* 컨텐츠 이미지 */}
        <Image
          src={contentsImage}
          alt="마케팅 문제와 브랜딩 문제"
          width={781}
          height={643}
          className="w-full max-w-[781px] h-auto mb-12 md:mb-16 el"
        />

        {/* 문의하기 버튼 */}
        <Link
          href="https://bit.ly/4qpx59b"
          target="_blank"
          className="hover:scale-105 transition-transform duration-300 pt-10 pb-13 md:pb-3 el"
        >
          <Image
            src={inqBtn}
            alt="지금 문의하기"
            width={319}
            height={116}
            className="w-auto h-[105px] md:h-[100px]"
          />
        </Link>
      </div>
    </section>
  );
}