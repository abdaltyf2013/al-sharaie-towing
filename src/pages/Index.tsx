import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Gallery />
      <Map />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
