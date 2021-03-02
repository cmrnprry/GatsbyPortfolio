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
import OFC from './PDFs/OFC Narrative Spreadsheet.pdf'
import DND from './PDFs/Date N\' Dash Sample.pdf'
import Horror from './PDFs/Horror Writing Sample.pdf'

class Writing extends React.Component {

  render() {
    return (
      <Layout>
        <SEO
          title="Writing Samples"
          description="Writing Samples"
          path="writing-samples"
        />
        <div className={style.container}>
          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href={Horror}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Short Horror Story</h2>
                <p>A short, horror story, that uses font, word size and formating to create interactivity in a linear narrative</p>
            </a>
          </div>

          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href={DND}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Date N' Dash</h2>
                <p>My contributions for the <i>Date N' Dash</i> script</p>
            </a>
          </div>

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
                <p>The <i>Out of CTRL</i> spreadsheet, showing the script and potential player answers</p>
            </a>
          </div>          
        </div>
      </Layout>
    )
  }
}

export default Writing
