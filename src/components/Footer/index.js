import React from "react"
import "./style.css"
import HybridLink from "../Utils/HybridLink"

function Footer() {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-flex col-md-1"></div>
          <div className="col-12 col-md-4">
            <h5 className="fw-bold">FiniteYFI</h5>
            <div className="footerLine"></div>
            <br />
            <div className="greytext">2020 @finiteYFI</div>
            <br />
            <div className="d-flex">
              <a href="#">
                <img
                  src="images/icon_tumblr.png"
                  alt=""
                  width="24px"
                  height="24px"
                  className="img-fluid social mx-2"
                />
              </a>
              <a href="#">
                <img
                  src="images/icon_google.png"
                  alt=""
                  width="24px"
                  height="24px"
                  className="img-fluid social mx-2"
                />
              </a>
            </div>
          </div>
          <div className="mt-5 mt-md-0 col-12 col-md-3 links">
            <h5 className="fw-bold">Our Pages</h5>
            <div className="footerLine"></div>
            <br />
            <div className="d-flex flex-column pages">
              <HybridLink linkPath="/" linkName="Home" requiredPathname="/" />
              <HybridLink
                linkPath="/#about"
                linkName="About"
                requiredPathname="/"
              />
              <HybridLink
                linkPath="/#services"
                linkName="Services"
                requiredPathname="/"
              />
              <HybridLink
                linkPath="/#partners"
                linkName="Partners"
                requiredPathname="/"
              />
              <HybridLink
                linkPath="/#contact"
                linkName="Contact"
                requiredPathname="/"
              />
            </div>
          </div>
          <div className="mt-5 mt-md-0 col-12 col-md-3 links">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="footerLine"></div>
            <br />
            <div className="d-flex flex-column pages">
              <a href="https://github.com/FiniteYFI/FiniteYFI">Github</a>
              <a href="https://www.instagram.com/marsec_developer/">Telegram</a>
              <a href="https://twitter.com/fYFIofficial">Twitter</a>
              <a href="https://discord.gg/SNsFzm/">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
