import AboutSection from '../components/LandingComp/AboutSection';
import ContactSection from '../components/LandingComp/ContactSection';
import Footer from '../components/LandingComp/Footer';

import ModernHero from '../components/LandingComp/ModernHero';
import Navbar from '../components/LandingComp/Navbar';
import ProductsSection from '../components/LandingComp/ProductsSection';
import ProductsServices from '../components/LandingComp/ProductsServices';


export default function LandingPage() {
  return (
    <>
   
    {/* <Hero/> */}
    <ModernHero/>
     <Navbar/>
     <AboutSection/>
    <ProductsServices/>
    <ProductsSection/>
    <ContactSection/>
    <Footer/>
    
    </>
  );
}

