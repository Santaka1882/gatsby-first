import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>Aya fumo (ᗜˬᗜ)</p>
      <StaticImage
        src='https://i.pinimg.com/564x/ea/4f/2d/ea4f2de19f2e76adafc532edf0401bc4.jpg' 
        alt='Aya fumo (ᗜˬᗜ)'
      />
    </Layout>
  )
}

export default IndexPage