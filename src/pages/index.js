import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dashbord from "./Dashboard"

const IndexPage = () =>{ 
  return(
  <Layout>
    <Seo title="Its_Bio" />
    <Dashbord />

  </Layout>
)
}
export default IndexPage
