import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"

function HybridLink({ linkPath, linkName, requiredPathname, onClick }) {
  const location = useLocation()

  console.log(location)
  if (location.pathname !== requiredPathname) {
    return <Link to={linkPath}>{linkName}</Link>
  } else {
    return (
      <a href={linkPath} onClick={onClick}>
        {linkName}
      </a>
    )
  }
}

export default HybridLink
