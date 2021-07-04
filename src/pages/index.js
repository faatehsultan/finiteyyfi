import React from "react"
import "../styles/home.css"
import { MainLayout as Layout } from "../layouts"
import {
  Hero,
  WelcomeSection,
  ContactSection,
  Footer,
  Portfolio,
  Partners,
} from "../components"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div
      className="home"
      data-bs-spy="scroll"
      data-bs-target="#navbar-header"
      data-bs-offset="0"
      tabindex="0"
    >
      <Helmet>
        <title>Finiteyfi</title>
      </Helmet>
      <Layout>
        <div id="hero">
          <Hero />
        </div>
        <br />
        <br />
        <div id="services">
          <WelcomeSection />
        </div>
        <div className="break1">
          <div className="overlay"></div>
        </div>
        <br />
        <div id="portfolio">
          <Portfolio />
          <br />
        </div>
        <br />
        <div className="break2"></div>
        <div id="partners">
          <Partners />
          <br />
        </div>
        <div className="break2"></div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </Layout>
    </div>
  )
}
