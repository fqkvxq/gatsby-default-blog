import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Takuya Kawai's Dev Blog" />
    <h1>こんにちは！</h1>
    <p>河合のDev Blogです</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">2ページ目へ移動</Link>
  </Layout>
)

export default IndexPage
