import React, { useState, useEffect } from "react"
import "./style.css"
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "../../data"

function Portfolio() {
  const [curTilesSet, setCurTilesSet] = useState(PORTFOLIO_CATEGORIES[0])
  const [curTiles, setCurTiles] = useState()

  useEffect(() => {
    let temp = []
    curTilesSet.forEach(i => {
      temp.push(PORTFOLIO_ITEMS[i])
    })
    setCurTiles(temp)
  }, [curTilesSet])

  return (
    <div className="portfolio py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="fs-3 fw-bold">What we have developed</div>
        <div className="d-flex py-3">
          <div className="welcomeBottomLine_1"></div>
          <div className="welcomeBottomLine_2"></div>
          <div className="welcomeBottomLine_1"></div>
        </div>
        <p className="text-center" style={{ maxWidth: "500px" }}>
          FiniteYFI believes in change. Our BCS Dapp MVP
        </p>
        <br />
      </div>

      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-danger mx-2 rounded-pill"
            onClick={() => setCurTilesSet(PORTFOLIO_CATEGORIES[0])}
          >
            All
          </button>
          <button
            className="btn btn-danger mx-2 rounded-pill"
            onClick={() => setCurTilesSet(PORTFOLIO_CATEGORIES[1])}
          >
            De Ride App
          </button>
          <button
            className="btn btn-danger mx-2 rounded-pill"
            onClick={() => setCurTilesSet(PORTFOLIO_CATEGORIES[2])}
          >
            De Ride Captian App
          </button>
          <button
            className="btn btn-danger mx-2 rounded-pill"
            onClick={() => setCurTilesSet(PORTFOLIO_CATEGORIES[3])}
          >
            Others
          </button>
          <button
            className="btn btn-danger mx-2 rounded-pill"
            onClick={() => setCurTilesSet(PORTFOLIO_CATEGORIES[4])}
          >
            Control Panel
          </button>
        </div>
        <br />
        <br />

        <div className="row">
          {curTiles && curTiles.map((i, ind) => (
            <div className="col-12 col-md-4 py-2" key={ind}>
              <div
                className="portfolioCard rounded d-flex flex-column"
                style={{ background: `url(${i.image})` }}
              >
                <div className="d-flex overlayContainer1 justify-content-start">
                  <div className="overlay"></div>
                </div>
                <div className="d-flex overlayContainer2 justify-content-end">
                  <div className="overlay"></div>
                </div>
                <div className="textContent d-flex position-absolute pt-3 px-3 flex-column text-white">
                  <h4 className="fw-bold">{i.title}</h4>
                  <p className="fs-5">{i.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Portfolio
