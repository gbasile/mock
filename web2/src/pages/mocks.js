import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import EndpointList from '../containers/EndpointList'

const SecondPage = () => (
  <Layout>
    <h1>Mocks Endpoints availables</h1>
    <p>Toma tu lista</p>

    <EndpointList />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
