/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from '../../components/post-list/post-list.module.less'

/* Samples */
import OFC from './PDFs/OFC Narrative outline.pdf'
import Bound from './PDFs/Bound (Working Title) Design Doc.pdf'
import Mall from './PDFs/THEMALL Designs.pdf'


class Design extends React.Component {

  render() {
    return (
      <Layout>
        <SEO
          title="Design Samples"
          description="Design Samples"
          path="design-samples"
        />
        <div className={style.container}>
          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href={OFC}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Out of CTRL</h2>
                <p>The <i>Out of CTRL</i> narrative design outline</p>
            </a>
          </div>   
         
          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href={Mall}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>THEMALL</h2>
                <p><i>THEMALL</i> store designs and moodboards</p>
            </a>
          </div>  
         
          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href={Bound}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Bound</h2>
                <p>A detailed design document for a yet-to-be-made horror game</p>
            </a>
          </div>

 
          {/* <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href="https://docs.google.com/document/d/1B7WWNdc9rS4ZCIn5PH-3WMwb2cXQ1_21iDqvPtYizYg/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Roots of Another Kind</h2>
                <p>A 2 page Design Document for a short Twine game</p>
            </a>
          </div> */}

       
        </div>
      </Layout>
    )
  }
}

export default Design
