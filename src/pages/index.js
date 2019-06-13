import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import ArticleHeader from '../components/ArticleHeader'
import SideBar from '../components/SideBar'
import FeaturedPosts from '../components/content-modules/featured-posts'
import LandingPageImage from '../components/content-modules/LandingPageImage'
// import getLandingPageModule from '../utils/getLandingPageModule'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from "../components/layout"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const prevPath = {}
    const nextPath = {}
    return (
      <Layout location={this.props.location} title={siteTitle} children={{}} >
        <div className="grid">
          <div className="header">
            <div className="logo-title">
              Tilly Rating
            </div>
          </div>
          <div className="content">
            {/* {articles.map(({ node }, i) => <Article node={node} key={i} />)} */}
            <div className="previousPost pagination">
              {prevPath && <Link to={prevPath}>
                <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                    <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
                  </g>
                </svg>
              </Link>}
            </div>
            <div className="nextPost pagination">
              { nextPath && <Link to={nextPath}>

                <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g>
                    <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                    <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
                  </g>
                </svg>
              </Link>}
            </div>
          </div>
          <SideBar />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
