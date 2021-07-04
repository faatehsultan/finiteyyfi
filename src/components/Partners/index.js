import React from "react"
import "./style.css"

function Partners() {
  return (
    <div className="partners">
      <br />
      <br />
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="fs-3 fw-bold">Our Partners</div>
        <div className="d-flex py-3">
          <div className="welcomeBottomLine_1"></div>
          <div className="welcomeBottomLine_2"></div>
          <div className="welcomeBottomLine_1"></div>
        </div>
        <p className="text-center" style={{ maxWidth: "500px" }}></p>
        <br />
      </div>

      <div className="container">
        <div className="row">
          <a
            href="https://gamalogic.com/"
            className="col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center align-items-center py-4"
          >
            <img
              src="images/gamalogic.webp"
              alt=""
              width="100%"
              className="img-fluid rounded"
              style={{ objectFit: "cover", height: "130px" }}
            />
          </a>
          <a
            href="https://marsecdeveloper.netlify.app/"
            className="col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center align-items-center py-4"
          >
            <img
              src="images/marsec.webp"
              alt=""
              width="100%"
              className="img-fluid rounded px-4"
              style={{ objectFit: "cover", height: "130px" }}
            />
          </a>
          <a
            href="https://appunite.com/"
            className="col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center align-items-center py-4"
          >
            <img
              src="images/appunite.webp"
              alt=""
              width="100%"
              className="img-fluid rounded"
              style={{ objectFit: "cover", height: "130px" }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Partners
