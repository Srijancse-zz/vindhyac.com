import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'
import picture from '../assets/photo.jpg'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle
    const postUrl = this.props.location.href
    return (
      <Layout>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={subtitle} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={postUrl} />
          <meta property="og:title" content="Blog by Vindhya C" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={picture} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={postUrl} />
          <meta property="twitter:title" content={postTitle} />
          <meta property="twitter:description" content={subtitle} />
          <meta property="twitter:image" content={picture} />
        </Helmet>
        <PostTemplateDetails {...this.props} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`
