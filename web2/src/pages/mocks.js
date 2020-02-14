import React from 'react'
import { Link } from 'gatsby'
import SignOut from '../containers/SignOut'

import Layout from '../components/layout'
import EndpointList from '../containers/EndpointList'

const SecondPage = () => (
  <Layout>
    <h1>Mocks Endpoints availables</h1>
    <EndpointList />
    <SignOut />
  </Layout>
)

export default SecondPage
