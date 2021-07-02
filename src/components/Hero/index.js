import React from "react"
import "./style.scss"

function Hero() {
  return (
    <div className="hero">
      <div className="overlay position-absolute"></div>
      <div className="content position-absolute text-white">
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">
          <div className="display-4">finiteYFI</div>
          <br />
          <p style={{ opacity: 0.6 }}>
            A Finite Supply with Hyper Deinflationary Cryptocurrency.
          </p>
          <br />
          <button className="btn btn-danger" href="/">
            Whitepaper
          </button>
          <br />
          <div className="fs-2 fw-bold">FiniteYFI = FYFI</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
