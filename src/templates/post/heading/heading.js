/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
/* App imports */
import TagList from '../../../components/tag-list'
import style from './heading.module.less'

const Heading = ({ title, cover, coverTitle, trailer, download, writing, design }) => (
  <div className={style.header}>
    <div className={style.title}>
      <h1>{title}</h1>
      {/* <TagList tags={tags} /> */}
      
      <div className={style.links}>
        <Link to={download}>Download Game</Link>
        {/* {writing != "" &&
        <a href={'./PDFs/' + {writing}}
          target="_blank"
          rel="nofollow noopener noreferrer"> Writing Sample </a>}
        {design != "" &&
        <a href={'./PDFs/' + {design}}
          target="_blank"
          rel="nofollow noopener noreferrer"> Design Sample </a>} */}
      </div>
    </div>



    <div className={style.cover}>
      {trailer == '' &&
        <Img fluid={cover} title={coverTitle} alt={title} />}
      {trailer != "" &&
      <iframe width="100%" height="400" src={trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
    </div>
  </div>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover: PropTypes.object.isRequired,
  coverTitle: PropTypes.string,
}

export default Heading
