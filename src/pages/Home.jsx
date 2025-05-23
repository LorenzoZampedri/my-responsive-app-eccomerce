// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import ProductCarousel from "../components/Product/ProductCarousel";
import ScrollEffects from "../components/home/ScrollEffects"; // opcional si lo armo
import Section from "../components/home/Section"; // para reutilizar bloques de contenido
import AOS from "aos";
import "aos/dist/aos.css";




export default function Home() {

  useEffect(() => {
  AOS.init({
    duration: 1000,
    once:true,
  });
}, []);

  return (
    <div className="home ">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4">
        <ScrollEffects />
      <Section data-aos="fade-up" className="mt-10" title="Lo más destacado">
      <ProductCarousel />
      </Section>
      <Section data-aos="fade-up" className="mt-10" title="Recomendados para vos">
        <ProductCarousel />
      </Section>
      <Section data-aos="fade-up" className="mt-10" title="Nuevos lanzamientos">
        <ProductCarousel />
      </Section>
      </div>
      <div className="max-w-7xl">.</div>
    </div>
    
  );
}