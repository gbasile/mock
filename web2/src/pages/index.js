import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <h1>Hi Humans</h1>
    <Link to="/mocks/">Go to Mocks</Link>
    <SignOut />
  </Layout>
)

export default IndexPage
