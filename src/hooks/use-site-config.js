import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          siteCover
          authorName
          authorAvatar
          authorDescription
          siteDescription
          twitterUsername
          utterancesRepo
          defaultLang
          headerTitle
          headerLinksIcon
          headerLinks {
            label
            url
          }
          websiteHost {
            name
            url
          }
          footerLinks {
            sectionName
            links {
              label
              url
            }
          }
        }
      }
    }
  `)
  return result.site.siteMetadata
}

export default useSiteMetadata
