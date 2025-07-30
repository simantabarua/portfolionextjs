import AboutMe from "@/components/AboutMe";
import Activity from "@/components/Activity";
import Banner from "@/components/Banner";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home(): JSX.Element {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      {/* <Certification/> */}
      <Activity />
      <Footer />
    </main>
  );
}
