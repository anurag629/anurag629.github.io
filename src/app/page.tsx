import Header from "@/components/Header";
import Rail from "@/components/Rail";
import Identity from "@/components/Identity";
import Section from "@/components/Section";
import Now from "@/components/Now";
import RoutingTable from "@/components/RoutingTable";
import Work from "@/components/Work";
import Trace from "@/components/Trace";
import OpenSource from "@/components/OpenSource";
import Writing from "@/components/Writing";
import Signals from "@/components/Signals";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-on-signal"
      >
        Skip to content
      </a>

      <Header />
      <Rail />

      <div className="mx-auto max-w-shell px-5 md:px-8 lg:pl-[calc(3.5rem+2rem)]">
        <main id="main">
          <Identity />

          <Section
            id="now"
            index="01"
            title="Now"
            caption="Three things running at once."
          >
            <Now />
          </Section>

          <Section
            id="stack"
            index="02"
            title="Stack"
            caption="What gets routed where, and how long it has been in rotation."
          >
            <RoutingTable />
          </Section>

          <Section
            id="work"
            index="03"
            title="Work"
            caption="Public repositories. Counts refresh on every build."
          >
            <Work />
          </Section>

          <Section
            id="trace"
            index="—"
            title="Trace"
            caption="Where the last five years went."
          >
            <Trace />
          </Section>

          <Section
            id="open-source"
            index="04"
            title="Open source"
            caption="Every pull request below was verified as merged before it was listed."
          >
            <OpenSource />
          </Section>

          <Section
            id="writing"
            index="05"
            title="Writing"
            caption="Mostly data science, mostly 2022 and 2023."
          >
            <Writing />
          </Section>

          <Section id="signals" index="06" title="Signals">
            <Signals />
          </Section>

          <Section id="contact" index="07" title="Contact">
            <Contact />
          </Section>
        </main>

        <Footer />
      </div>
    </>
  );
}
