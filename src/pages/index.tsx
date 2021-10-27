import React from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing/Landing"

import Structure from "../components/game/Structure"

const IndexPage = props => {

  return (
    <Layout>
      <SEO title="somewhere else" />
      <section className="main-panel">
        {/* <Landing /> */}
        <Structure />
      </section>
    </Layout>
  )
}

const mapStateToProps = ({ data }) => {
  return { data }
}

export default connect(mapStateToProps)(IndexPage)
