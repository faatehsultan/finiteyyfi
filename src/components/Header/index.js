import React, { useState, useEffect } from "react"
import "./style.css"
import HybridLink from "../Utils/HybridLink"
import { Link } from "@reach/router"

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen)
  const [hbg, setHbg] = useState("transparent")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 75) {
        setHbg("white")
      } else {
        setHbg("transparent")
      }
    })
  }, [])

  return (
    <div
      className="header position-fixed w-100 top-0 py-1"
      style={{
        backgroundColor: hbg,
        color: hbg === "transparent" ? "white" : "black",
        boxShadow: hbg === "transparent" ? "none" : "0px 0px 10px gray",
      }}
    >
      <div className="container d-flex justify-content-between align-items-center pt-1">
        <div className="logoContainer">
          <Link to="/" className="navbar-brand">
            <img
              src="/images/logo_transparent.webp"
              alt=""
              width="60px"
              className="img-fluid"
              style={{ filter: hbg === "transparent" ? "none" : "invert(1)" }}
            />
          </Link>
        </div>
        <div
          className="navContainer nav d-none d-md-flex align-items-center justify-content-evenly"
          id="navbar-header"
        >
          <li class="nav-item">
            <div className="px-2 nav-link">
              <HybridLink
                linkPath="/#hero"
                linkName="Home"
                requiredPathname="/"
              />
            </div>
          </li>
          <li class="nav-item">
            <div className="px-2 nav-link">
              <HybridLink
                linkPath="/#services"
                linkName="Services"
                requiredPathname="/"
              />
            </div>
          </li>
          <li class="nav-item">
            <div className="px-2 nav-link">
              <HybridLink
                linkPath="/#portfolio"
                linkName="Portfolio"
                requiredPathname="/"
              />
            </div>
          </li>
          <li class="nav-item">
            <div className="px-2 nav-link">
              <HybridLink
                linkPath="#"
                linkName="Tokennomics"
                requiredPathname="/"
              />
            </div>
          </li>
          <li class="nav-item">
            <div className="px-2 nav-link">
              <HybridLink
                linkPath="#"
                linkName="Partners"
                requiredPathname="/"
              />
            </div>
          </li>
          <li class="nav-item">
            <div className="px-2 nav-link">
              <a href="https://medium.com/@FiniteYFI">Blog</a>
            </div>
          </li>
          <div className="px-2">
            <button
              type="button"
              class="btn btn-danger rounded-pill"
              href="#contact"
            >
              Waitlist
            </button>
          </div>
        </div>

        <div
          className="navBtnMobile d-flex d-md-none"
          style={{
            color: hbg === "transparent" ? "white" : "black",
          }}
        >
          <button className="deadStyleBtn" onClick={toggleMobileNav}>
            <i className="bi bi-list fs-1"></i>
          </button>
        </div>

        {mobileNavOpen && (
          <div className="navContainerMobile position-fixed d-flex d-md-none flex-column text-white align-items-center fs-5">
            <div className="container d-flex d-md-none flex-column text-white align-items-center">
              <div className="navBtnMobile d-flex d-md-none text-white w-100 justify-content-end">
                <button className="deadStyleBtn" onClick={toggleMobileNav}>
                  <i className="bi bi-x fs-1"></i>
                </button>
              </div>

              <div className="py-3">
                <HybridLink
                  linkPath="/#hero"
                  linkName="Home"
                  requiredPathname="/"
                  onClick={toggleMobileNav}
                />
              </div>
              <div className="py-3">
                <HybridLink
                  linkPath="/#services"
                  linkName="Services"
                  requiredPathname="/"
                  onClick={toggleMobileNav}
                />
              </div>
              <div className="py-3">
                <HybridLink
                  linkPath="/#portfolio"
                  linkName="Portfolio"
                  requiredPathname="/"
                  onClick={toggleMobileNav}
                />
              </div>
              <div className="py-3">
                <HybridLink
                  linkPath="#"
                  linkName="Tokennomics"
                  requiredPathname="/"
                  onClick={toggleMobileNav}
                />
              </div>
              <div className="py-3">
                <HybridLink
                  linkPath="/"
                  linkName="Partners"
                  requiredPathname="/"
                  onClick={toggleMobileNav}
                />
              </div>
              <div className="py-3" onClick={toggleMobileNav}>
                <a href="https://medium.com/@FiniteYFI">Blog</a>
              </div>
              <div className="py-3" onClick={toggleMobileNav}>
                <button
                  type="button"
                  class="btn btn-danger rounded-pill"
                  href="#contact"
                >
                  Waitlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
