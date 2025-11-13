

import AnimationProvider from "./_components/AnimationProvider";
import Header from "./_components/Header";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <AnimationProvider>
          <Section1 />
          <Section2 />
          <Section3 />
        </AnimationProvider>
      </main>
    </>
  );
}
