import React, { useState } from "react"
import "./style.scss"
import HybridLink from "../Utils/HybridLink"

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen)

  return (
    <div className="header position-fixed w-100 top-0">
      <div className="container d-flex justify-content-between align-items-center pt-1">
        <div className="logoContainer">
          <img
            src="/images/logo_transparent.webp"
            alt=""
            width="60px"
            className="img-fluid"
          />
        </div>
        <div className="navContainer text-white d-none d-md-flex align-items-center justify-content-evenly">
          <div className="px-2">
            <HybridLink linkPath="/" linkName="Home" requiredPathname="/" />
          </div>
          <div className="px-2">
            <HybridLink linkPath="/" linkName="Services" requiredPathname="/" />
          </div>
          <div className="px-2">
            <HybridLink
              linkPath="/"
              linkName="Portfolio"
              requiredPathname="/"
            />
          </div>
          <div className="px-2">
            <HybridLink
              linkPath="/"
              linkName="Tokennomics"
              requiredPathname="/"
            />
          </div>
          <div className="px-2">
            <HybridLink linkPath="/" linkName="Partners" requiredPathname="/" />
          </div>
          <div className="px-2">
            <HybridLink linkPath="/" linkName="Blog" requiredPathname="/" />
          </div>
          <div className="px-2">
            <button type="button" class="btn btn-danger rounded-pill">
              Waitlist
            </button>
          </div>
        </div>

        <div className="navBtnMobile d-flex d-md-none text-white">
          <button className="deadStyleBtn" onClick={toggleMobileNav}>
            <i className="bi bi-list fs-1"></i>
          </button>
        </div>

        {mobileNavOpen && (
          <div className="navContainerMobile position-fixed d-flex d-md-none flex-column text-white align-items-center fs-5">
            <div className="navBtnMobile d-flex d-md-none text-white w-100 justify-content-end">
              <button className="deadStyleBtn" onClick={toggleMobileNav}>
                <i className="bi bi-x fs-1"></i>
              </button>
            </div>

            <div className="py-3">
              <HybridLink linkPath="/" linkName="Home" requiredPathname="/" />
            </div>
            <div className="py-3">
              <HybridLink
                linkPath="/"
                linkName="Services"
                requiredPathname="/"
              />
            </div>
            <div className="py-3">
              <HybridLink
                linkPath="/"
                linkName="Portfolio"
                requiredPathname="/"
              />
            </div>
            <div className="py-3">
              <HybridLink
                linkPath="/"
                linkName="Tokennomics"
                requiredPathname="/"
              />
            </div>
            <div className="py-3">
              <HybridLink
                linkPath="/"
                linkName="Partners"
                requiredPathname="/"
              />
            </div>
            <div className="py-3">
              <HybridLink linkPath="/" linkName="Blog" requiredPathname="/" />
            </div>
            <div className="py-3">
              <button type="button" class="btn btn-danger rounded-pill">
                Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
