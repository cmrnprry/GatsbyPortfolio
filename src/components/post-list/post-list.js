/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Config from '../../../config'
/* App imports */
import style from './post-list.module.less'
import TagList from '../tag-list'
import Utils from '../../utils'

function SortObjects(a, b)
{
  return a.node.frontmatter.listIndex - b.node.frontmatter.listIndex;
}

const PostList = ({ posts }) => (
  <div className={style.container}>
    { posts.sort(SortObjects).map((post) => {
      if (post.node.frontmatter.listIndex <= -1)
      {
        return null
      }
      const { title, date, path, tags, cover, excerpt } = post.node.frontmatter
      return (
        <Link to={Utils.resolvePageUrl(path)} key={title} className={style.post}>
          <div className={style.cover}>
          <Link to={Utils.resolvePageUrl(path)}>
              <Img
                fluid={cover.childImageSharp.fluid}
                title={excerpt}
                alt={title}
              />
            </Link>
          </div>
          <Link className={style.content} to={Utils.resolvePageUrl(path)}>
              {date ? <label>{date}</label> : null}
              <h2>{title}</h2>
              <p>{excerpt}</p>
              <TagList tags={tags} />
          </Link> 
        </Link>
      )
    })}
  
    <Link to={Config.pages.writing}><h2 className={style.SeeMore}>See More Games</h2></Link>
  </div>
  
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string,
          path: PropTypes.string.isRequired,
          trailerURL: PropTypes.string,
          download: PropTypes.string,
          writing: PropTypes.string,
          design: PropTypes.string,
          listIndex: PropTypes.number.isRequired,
          isShipped: PropTypes.bool.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string).isRequired,
          cover: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }),
    })
  ),
}

export default PostList
