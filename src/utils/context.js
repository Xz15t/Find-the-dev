import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { mockData } from "./data"
const authAxios = axios.create({
  baseURL: "https://api.github.com/users",
})

const AppContext = React.createContext()

// Check user's local storage to see what theme they prefer on startup
const getLocalTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("")
  const [currentUser, setCurrentUser] = useState(mockData)
  const [theme, setTheme] = useState(getLocalTheme())
  const [error, setError] = useState({ show: false, message: "" })

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleError = (show = false, message = "") => {
    setError({ show, message })
  }

  const searchGithubUser = async (e) => {
    e.preventDefault()
    toggleError()
    const response = await authAxios
      .get(`/${searchValue}`)
      .catch((err) => console.log(err))

    if (response) {
      const { data } = response
      console.log(data)
      setCurrentUser(data)
      setSearchValue("")
    } else {
      setSearchValue("")
      toggleError(true, "No results")
    }
  }

  const toggleTheme = () =>
    setTheme((previousTheme) => {
      if (previousTheme === "light-theme") {
        setTheme("dark-theme")
      } else {
        setTheme("light-theme")
      }
    })

  return (
    <AppContext.Provider
      value={{
        currentUser,
        toggleTheme,
        theme,
        searchGithubUser,
        searchValue,
        setSearchValue,
        error,
        setError
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalContext }
