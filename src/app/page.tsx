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
import VisitorCounter from "@/components/VisitorCounter";

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
      <VisitorCounter />
    </>
  );
}
