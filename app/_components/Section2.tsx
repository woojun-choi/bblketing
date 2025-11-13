'use client';

import Image from 'next/image';

import usp from '@/app/assets/usp.png';

export default function Section2() {
  return (
    <section className="w-full h-auto md:h-[600px] bg-[#F2F2FF] flex items-center justify-center py-16 md:py-0">
      <div className="w-full max-w-[1920px] flex items-center justify-center px-6">
        <Image
          src={usp}
          alt="USP"
          width={733}
          height={278}
          className="w-[calc(100%-48px)] max-w-[283.14px] md:max-w-[650px] h-auto el"
        />
      </div>
    </section>
  );
}