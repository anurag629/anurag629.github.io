import Header from "@/components/Header";
import StatusBar from "@/components/StatusBar";
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-on-signal"
      >
        Skip to content
      </a>

      <Header />

      {/* Top padding clears the title bar, bottom clears the status line. */}
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-14 md:px-6">
        <main id="main">
          <Identity />

          <Section
            id="now"
            title="Now"
            cmd="cat"
            args="now.md"
            caption="Three things running at once."
          >
            <Now />
          </Section>

          <Section
            id="stack"
            title="Stack"
            cmd="cat"
            args="/etc/routes.conf"
            caption="What gets routed where, and how long it has been in rotation."
          >
            <RoutingTable />
          </Section>

          <Section
            id="work"
            title="Work"
            cmd="ls"
            args="-la ~/repos"
            caption="Public repositories. Counts refresh on every build."
          >
            <Work />
          </Section>

          <Section
            id="trace"
            title="Trace"
            cmd="git"
            args="log --graph --oneline"
            caption="Where the last five years went."
          >
            <Trace />
          </Section>

          <Section
            id="open-source"
            title="Open source"
            cmd="gh"
            args="pr list --author @me --state merged"
            caption="Every pull request below was verified as merged before it was listed."
          >
            <OpenSource />
          </Section>

          <Section
            id="writing"
            title="Writing"
            cmd="cat"
            args="posts.log"
            caption="Mostly data science, mostly 2022 and 2023."
          >
            <Writing />
          </Section>

          <Section id="signals" title="Signals" cmd="uname" args="-a">
            <Signals />
          </Section>

          <Section id="contact" title="Contact" cmd="ssh" args="anurag@github">
            <Contact />
          </Section>
        </main>

        <Footer />
      </div>

      <StatusBar />
    </>
  );
}
