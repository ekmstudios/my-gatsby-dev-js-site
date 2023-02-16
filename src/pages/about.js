import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

//Step 2: Define the component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Page">
            <p>Hi there. Working on my Gatsby and React skills.</p>
            <StaticImage
      alt="Gatsby Plugin"
      src="../images/icon.png"
      />
      </Layout>
    )
}

export const Head = () => <title>About Me</title>

//Step 3: Export your component
export default AboutPage 