

import AnimationProvider from "./_components/AnimationProvider";
import Section1 from "./_components/Section1";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <AnimationProvider>
          <Section1 />
        </AnimationProvider>
      </main>
    </>
  );
}
