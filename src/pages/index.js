import React from "react"
import "../styles/home.scss"
import { MainLayout as Layout } from "../layouts"
import { Hero, WelcomeSection, ContactSection } from "../components"

export default function Home() {
  return (
    <div className="home">
      <Layout>
        <Hero />
        <br />
        <br />
        <WelcomeSection />
        <div className="break1">
          <div className="overlay"></div>
        </div>
        <br />
        <br />
        <ContactSection />
        
      </Layout>
    </div>
  )
}
