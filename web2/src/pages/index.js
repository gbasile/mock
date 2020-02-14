import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SignOut from '../containers/SignOut'

const IndexPage = () => (
  <Layout>
    <Link to="/mocks/">Go to Mocks</Link>
    <br />
    <br />
    <SignOut />
  </Layout>
)

export default IndexPage
