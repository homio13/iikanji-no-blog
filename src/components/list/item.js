import * as React from "react"
import { Link } from "gatsby"

const ListItem = ({icon, title, link, createdAt}) => {
  return (
    <article className="ArticleCard_container">
      <Link to={link} itemProp="url" className="ArticleCard_mainLink">
        <div className="ArticleCard">
          <div className="ArticleCard_emojiContainer">
            <span className="emoji">{icon}</span>
          </div>
          <div className="ArticleCard_infoContainer">
            <div className="ArticleCard_titleContainer">
              <h3 className="ArticleCard_title">{title}</h3>
            </div>
            <small>{createdAt}</small>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ListItem
