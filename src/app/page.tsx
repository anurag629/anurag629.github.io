import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  OpenSource,
  Projects,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <OpenSource />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
