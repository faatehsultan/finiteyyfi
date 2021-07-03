import React from "react"
import { Header } from "../../components"
import "./style.css"

function MainLayout(props) {
  return (
    <div className="mainLayout">
      <Header />
      <div className="mainContentContainer">{props.children}</div>
    </div>
  )
}

export default MainLayout
