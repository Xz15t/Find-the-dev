import React from "react"
import Avatar from "./Avatar"
import {
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  CompanyIcon,
} from "./icons/Icons"
// import { mockData } from "../utils/data"
import dayjs from "dayjs"
import { useGlobalContext } from "../utils/context"

const Dashboard = () => {
  const { currentUser } = useGlobalContext()

  const {
    login,
    name,
    html_url: githubUrl,
    followers,
    following,
    bio,
    location,
    company,
    blog,
    public_repos,
    created_at,
    twitter_username,
  } = currentUser

  const createdDate = dayjs(created_at).format("DD MMM YYYY")

  return (
    <section className="section section-dashboard">
      <Avatar mode={"tab-desk"} />
      <div className="section-dashboard__main">
        <div className="top">
          <Avatar mode={"mobile"} />
          <div className="user-info">
            <h2 className="user-info__name">{name}</h2>
            <a
              className="user-info__github-link"
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{login}
            </a>
            <p className="user-info__date">Joined {createdDate}</p>
          </div>
        </div>
        <div className="user-bio">
          <p style={bio ? { opacity: 1 } : { opacity: 0.75 }}>
            {bio ? `${bio}` : `This profile has no bio`}
          </p>
        </div>
        <div className="user-stats">
          <div className="user-stats__stat">
            <p>
              Repos <span>{public_repos}</span>
            </p>
          </div>
          <div className="user-stats__stat">
            <p>
              Followers <span>{followers}</span>
            </p>
          </div>
          <div className="user-stats__stat">
            <p>
              Following <span>{following}</span>
            </p>
          </div>
        </div>
        <div className="user-links">
          <div>
            <LocationIcon iconClass={location ? `available` : `unavailable`} />
            <p className={location ? `available` : `unavailable`}>
              {location || "Not Available"}
            </p>
          </div>
          <div>
            <WebsiteIcon iconClass={blog ? `available` : `unavailable`} />
            {blog ? (
              <a
                className={blog ? `available` : `unavailable`}
                href={blog}
                target="_blank"
                rel="noreferrer noopener"
              >
                {blog}
              </a>
            ) : (
              <p className={blog ? `available` : `unavailable`}>
                Not Available
              </p>
            )}
          </div>
          <div>
            <TwitterIcon
              iconClass={twitter_username ? `available` : `unavailable`}
            />
            <a
              className={twitter_username ? `available` : `unavailable`}
              href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {twitter_username ? `@${twitter_username}` : "Not Available"}
            </a>
          </div>
          <div>
            <CompanyIcon iconClass={company ? `available` : `unavailable`} />
            <p className={company ? `available` : `unavailable`}>
              {company ? `@${company}` : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
