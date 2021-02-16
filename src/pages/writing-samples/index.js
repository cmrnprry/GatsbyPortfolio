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
            <a href="https://docs.google.com/document/d/1b4xl8zx19XFUYKFVEkLIUoOxDb1R7lWyrLdyArHg4aI/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Short Horror Story</h2>
                <p>A 1000 word horror story originally written for a job application</p>
            </a>
          </div>

          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href="https://docs.google.com/document/d/1GCBNr-Guh2xMSyEQyVL-KyqSnFz3Mc0xr-MNpCMtTXc/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Date N' Dash</h2>
                <p>My parts for the <i>Date N' Dash</i> script</p>
            </a>
          </div>

          <div className={style.post}
            style={{
              justifyContent: 'center', 
              backgroundColor: 'rgb(100 72 92 / 49%)',
              textAlign: 'center'
          }}>
            <a href="https://docs.google.com/spreadsheets/d/1fh0e3ylTJlrqP1IkYJzQsCbWZ3ngHYl5HvgGUI0IKIs/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
                <h2>Out of CTRL</h2>
                <p>The <i>Out of CTRL</i> script</p>
            </a>
          </div>          
        </div>
      </Layout>
    )
  }
}

export default Writing
