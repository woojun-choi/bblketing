'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import backImage from '@/app/assets/07-back.png';
import titleImage from '@/app/assets/07-title.png';

export default function Section7() {
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
      <div className="relative z-10 w-full min-h-[975px] flex flex-col items-center justify-center py-10 px-6 -mt-18 mb-5 md:-mb-1">
        {/* 타이틀 */}
        <Image
          src={titleImage}
          alt="고객 만족 약속 20가지"
          width={575}
          height={117}
          className="el w-full max-w-[575px] h-auto mb-12"
        />

        {/* 유튜브 영상 */}
        <div className="el w-full max-w-[800px] aspect-video rounded-2xl overflow-hidden shadow-2xl border-3 md:border-5 border-white">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nHKiQfG1kxw?si=H2bNLC5Cpo9ZjiiZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}