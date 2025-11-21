

import AnimationProvider from "./_components/AnimationProvider";
import Header from "./_components/Header";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Section4 from "./_components/Section4";
import Section5 from "./_components/Section5";
import Section6 from "./_components/Section6";
import Section7 from "./_components/Section7";
import Section8 from "./_components/Section8";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <AnimationProvider>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
        </AnimationProvider>
      </main>
    </>
  );
}
