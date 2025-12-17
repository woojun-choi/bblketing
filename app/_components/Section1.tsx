'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import mainTitle from "@/app/assets/main-title.png";
import mainTxt from "@/app/assets/main-txt.png";
import inqBtn from "@/app/assets/inquiry_btn.png";

export default function Section1() {
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
    <section 
      ref={sectionRef}
      className="w-full aspect-[3/4] md:aspect-video flex flex-col items-center justify-center relative after:absolute after:z-[-2] after:w-full after:h-full after:top-0 after:left-0 after:content-[''] after:bg-[#222222] after:bg-opacity-[0.64]"
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        controls={false} 
        className='absolute top-0 left-0 w-full h-full z-0 object-cover brightness-75'
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>

      {/* PC 컨텐츠 */}
      <div className="absolute hidden md:flex top-0 left-0 inset-0 z-10 items-center justify-center">
        <div className="flex flex-col items-center gap-[5vw] 2xl:gap-[80px] ">
          <Image
            src={mainTitle}
            alt="대표님의 이름이 선택의 기준이 될수 있도록"
            width={621}
            height={277}
            style={{ width: "80%", height: "auto" }}
            className="el"
          />
          <Image
            src={mainTxt}
            alt="나만의 브랜드 블로그 마케팅으로"
            width={544}
            height={61}
            style={{ width: "72%", height: "auto" }}
            className="el"
          />
          <a
            href="https://bit.ly/4qpx59b"
            target="_blank"
            className="el mt-[50px] md:mt-[25px] hover:scale-105"
            style={{ width: "37%", height: "auto" }}
          >
            <Image
              src={inqBtn}
              alt="문의하기 버튼"
              width={319}
              height={116}
            />
          </a>
        </div>
      </div>
      
      {/* MO 컨텐츠 */}
      <div className="flex md:hidden flex-col gap-[9vw] w-full justify-center items-center mx-auto relative z-10">
        <div className="flex flex-col w-[84%] items-center pb-12 gap-[6vw]">
          <Image
            src={mainTitle}
            alt="대표님의 이름이 선택의 기준이 될수 있도록"
            width={621}
            height={277}
            style={{ width: "100%", height: "auto" }}
            className="el"
          />
          <Image
            src={mainTxt}
            alt="나만의 브랜드 블로그 마케팅으로"
            width={544}
            height={61}
            style={{ width: "70%", height: "auto" }}
            className="el"
          />
          <a
            href="https://bit.ly/4qpx59b"
            target="_blank"
            className="el mt-[10vw] hover:scale-105 pl-8"
            style={{ width: "53%", height: "auto" }}
          >
            <Image
              src={inqBtn}
              alt="문의하기 버튼"
              width={319}
              height={116}
            />
          </a>
        </div>
      </div>
      
    </section>
  );
}