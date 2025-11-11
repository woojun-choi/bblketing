"use client";
import React from "react";
import { useEffect } from "react";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const boxes = document.querySelectorAll(".el");

    const observerOptions = {
      root: null, // viewport를 root로 사용
      rootMargin: "0px",
      threshold: 0.1, // 요소가 10% 보일 때 트리거
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 한 번 관찰한 후에는 관찰 해제
        }
      });
    }, observerOptions);

    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, []);

  return <>{children}</>;
}
