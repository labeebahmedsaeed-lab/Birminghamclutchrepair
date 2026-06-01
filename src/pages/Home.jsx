import Hero from '../components/Hero';
import PromoBand from '../components/PromoBand';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Areas from '../components/Areas';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBand />
      <About />
      <Services />
      <Pricing />
      <Areas />
      <section id="contact" className="section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
      <FAQ />
    </>
  );
}
