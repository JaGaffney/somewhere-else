import React, { useEffect } from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Landing from "../components/landing/Landing"

import Structure from "../components/game/Structure"


import { ItemData } from "../components/data/ItemData"
import { SkillData } from "../components/data/SkillData"

const IndexPage = props => {
  useEffect(() => {
    const itemData = new ItemData()
    const skillData = new SkillData()
    console.log(itemData)
    console.log(skillData)
    console.log(skillData.getNoncombatSkillById("SKILL_BUSHCRAFT"))
  }, [])


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
