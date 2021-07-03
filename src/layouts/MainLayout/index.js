import React from "react"
import { Header } from "../../components"

function MainLayout(props) {
  return (
    <div className="mainLayout">
      <Header />
      <div className="mainContentContainer">{props.children}</div>
    </div>
  )
}

export default MainLayout
