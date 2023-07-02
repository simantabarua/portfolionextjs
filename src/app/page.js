import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Banner  />
      <AboutMe/>
      <Projects />
      <Contact />
      <Footer/>
    </main>
  );
}
