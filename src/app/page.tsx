import {
  Header,
  Hero,
  About,
  FeaturedProject,
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
        <FeaturedProject />
        <Experience />
        <Skills />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
      <VisitorCounter />
    </>
  );
}
