import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Dashbord from "../components/dashbord/Dashbord"
import Header from "../Common Pages/Header/header"
const IndexPage = () =>{ 
  return(
  <Layout>
    <Seo title="Its_Bio" />
     
    <Header/>
    <Dashbord/>

  </Layout>
)
}
export default IndexPage
