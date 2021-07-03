import React from "react"
import "./style.css"

function ContactSection() {
  return (
    <div className="contactSection py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="fs-3 fw-bold">Contact with us</div>
        <div className="d-flex py-3">
          <div className="welcomeBottomLine_1"></div>
          <div className="welcomeBottomLine_2"></div>
          <div className="welcomeBottomLine_1"></div>
        </div>
        <p className="text-center" style={{ maxWidth: "500px" }}>
          Are you Ready To Grow your Career with Us ?? Ask our Professionals
          your Questions
        </p>
        <br />
        <br />
        <div className="container">
          <div className="row align-item-center">
            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ width: "fit-content" }}
              >
                <i className="bi bi-envelope fs-2"></i>
                <div className="fs-5">Email Us</div>
                <p>finiteyfi@yandex.com</p>
                <i className="bi bi-map fs-2"></i>
                <div className="fs-5">Our Podcasts</div>
                <p>https://medium.com/@FiniteYFI</p>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <form className="row">
                <div className="col-12 col-md-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      id="contact__name"
                      class="form-control"
                      placeholder="Name"
                    />
                    <label for="contact__name">Name</label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      id="contact__email"
                      class="form-control"
                      placeholder="Email"
                    />
                    <label for="contact__email">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      id="contact__subject"
                      class="form-control"
                      placeholder="Subject"
                    />
                    <label for="contact__subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div class="form-floating mb-3">
                    <textarea
                      type="text"
                      id="contact__message"
                      class="form-control"
                      placeholder="Message"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label for="floatingInput">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-danger">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default ContactSection
