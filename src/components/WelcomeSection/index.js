import React from "react"
import "./style.scss"

function WelcomeSection() {
  return (
    <div className="welcomeSection py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="fs-3 fw-bold">Welcome To FiniteYF</div>
        <div className="d-flex py-3">
          <div className="welcomeBottomLine_1"></div>
          <div className="welcomeBottomLine_2"></div>
          <div className="welcomeBottomLine_1"></div>
        </div>
        <p className="text-center" style={{ maxWidth: "500px" }}>
          FiniteYFI(fYFI) is the Binance Smart Chain (BEP -8) deflationary
          Cryptocurrency with the Aiming to Build a new Farming Concept to
          reward the holders. FiniteYFI is Building a the Decentralized Uber
          dAPP on the Binance Smart Chain (BCS) To overcome High Gas Fees issue
          and More Reliable and Fast Transction .
        </p>
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 p-3 welcomeCard">
            <div className="card d-flex flex-column justify-content-start align-items-center text-center w-100 p-3 px-4">
              <i className="bi bi-display display-4"></i>
              <div className="fs-4 fw-bold mb-2">
                FiniteYFI is BCS Hyper Deflationary Token
              </div>
              <p>
                FiniteYFI is Deflationary Token by 2% on every transaction until
                41% the total supply burn.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-3 welcomeCard">
            <div className="card d-flex flex-column justify-content-start align-items-center text-center w-100 p-3 px-4">
              <i className="bi bi-bar-chart-steps display-4"></i>
              <div className="fs-4 fw-bold mb-2">D-Ride-Hailing DAPP</div>
              <p>
                There’s a huge potential not only for a decentralized
                ride-sharing app, or a blockchain based company, but a company
                who can work more ethically for the betterment of this whole
                ecosystem.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 p-3 welcomeCard">
            <div className="card d-flex flex-column justify-content-start align-items-center text-center w-100 p-3 px-4">
              <i className="bi bi-pencil display-4"></i>
              <div className="fs-4 fw-bold mb-2">Farming with PoR</div>
              <p>
                As FiniteYFI is to create reward it’s holders so we come with
                new revolutionary concept of Farming through Proof of
                Reward(PoR) (BCS). The complete and detailed article on Framing
                will be out after the listing.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <div className="container">
          <div className="row align-item-center">
            <div className="col-12 col-md-7 p-1">
              <img
                src="images/fin8.png"
                alt=""
                className="img-fluid p-0 rounded"
                style={{ boxShadow: "1px 1px 10px gray" }}
              />
            </div>
            <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start px-md-5 py-4 py-md-1">
              <div className="fs-3">
                Decentralized Uber dAPP on Binance Smart Chain(BCS)
              </div>
              <br />
              <p>
                FiniteYFI(fYFI) is the BEP-8 (BSC) deflationary Cryptocurrency
                with the Aiming to Build a new Farming Concept to reward the
                holders. FiniteYFI is Building a the Decentralized Uber dAPP on
                the BCS To Overcome High Gas fees issue and Stable Proof with
                stacking.
              </p>
              <ul>
                <li>Proof of Staked Authority</li>
                <li>Cross-Chain Transfer</li>
                <li>Block time ~5 seconds</li>
              </ul>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default WelcomeSection
