"use client";

import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Statistics from "./components/Statistics";

export default function page() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Statistics />
            <Gallery />
        </>
    );
}