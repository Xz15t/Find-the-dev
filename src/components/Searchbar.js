import React from "react"
import { search } from "../assets/assets"
import { useGlobalContext } from "../utils/context"
const Searchbar = () => {
  const { searchGithubUser, searchValue, setSearchValue, error, setError } =
    useGlobalContext()

  return (
    <>
      <div className="searchbar">
        <form onSubmit={searchGithubUser} className="searchbar__form">
          <label htmlFor="search">
            <img className="icon" src={search} alt="search magnifying glass" />
          </label>
          <input
            id="search"
            className="search"
            type="text"
            placeholder={error.show === true ? "" : "Enter Github Username here ..."}
            value={searchValue}
            spellCheck="false"
            onChange={(e) => {
              setError(false, "")
              setSearchValue(e.target.value)
            }}
          />
          <button className="btn blue">Search</button>
        </form>
        <span className="searchbar__errorMsg">{error && error.message}</span>
      </div>
    </>
  )
}

export default Searchbar
