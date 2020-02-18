import React from 'react'
import Layout from '../components/layout'
import Endpoints from '../components/Endpoints/Endpoints'
import SignOut from '../components/Authentication/SignOut'

const IndexPage = () => (
  <Layout>
    <Endpoints />
    <br />
    <br />
    <SignOut />
  </Layout>
)

export default IndexPage
