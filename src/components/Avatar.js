import React from "react"
import { useGlobalContext } from "../utils/context"

const Avatar = (props) => {
  const { currentUser } = useGlobalContext()
  const { avatar_url } = currentUser
  // props mode takes either 'mobile' or 'tab-desk'
  return (
    <img
      className={`avatar ${props.mode}`}
      src={avatar_url}
      alt="user avatar"
    />
  )
}

export default Avatar
