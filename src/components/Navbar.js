import React from "react"
import { useGlobalContext } from "../utils/context"
import { SunIcon, MoonIcon } from "./icons/Icons"

const Navbar = () => {
  const { toggleTheme, theme } = useGlobalContext()
  return (
    <nav>
      <div className="navbar">
        <h1 className="navbar__site-name">
          Find the Dev.
        </h1>
        <button onClick={toggleTheme} className="navbar__toggle">
          {theme === "light-theme" ? "Dark" : "Light"}
          {theme === "light-theme" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
