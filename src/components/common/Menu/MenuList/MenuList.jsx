import React from "react"
import { Link } from "react-router-dom"

import { PAGES } from "utils/constants"

const MenuList = ({ onClick }) => (
  <>
    {PAGES.map((page) => {
      if (page.name === "Home") {
        return null
      }
      return (
        <Link onClick={onClick} key={page.name} to={page.url}>
          <strong>{page.name}</strong>
        </Link>
      )
    })}
  </>
)

export default MenuList
