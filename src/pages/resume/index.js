/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import resume from './narrative_design_resume.pdf'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './index.module.less'


class Resume extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="resume"
          description="My resume"
          path="resume"
        />
        <div className={style.container}>
          <div className={style.content}>
            <h2>
              If you can't view the pdf, <a href={resume} target="_blank"
                rel="nofollow noopener noreferrer"
                style={{ color: '#FFFFFF', textDecoration: 'underline' }}> here's a downloadable link!</a>
            </h2>
            <div>
              <embed src={resume} width="100%" height="1000vh"/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flagIt: file(name: { eq: "flag-it" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Resume
