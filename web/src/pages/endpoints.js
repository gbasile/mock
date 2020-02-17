import React from 'react'
import SignOut from '../containers/SignOut'

import Layout from '../components/layout'
import EndpointList from '../containers/EndpointList'
import EndpointCreate from '../containers/EndpointCreate'

const EndpointsPage = () => (
  <Layout>
    <h1>Endpoints availables</h1>
    <EndpointCreate />
    <EndpointList />
    <SignOut />
  </Layout>
)

export default EndpointsPage
