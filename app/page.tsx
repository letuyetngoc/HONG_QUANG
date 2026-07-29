import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Statistics from '../components/home/Statistics';
import Gallery from '../components/home/Gallery';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
