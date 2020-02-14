import React from 'react'
import { Link } from 'gatsby'

const EndpointItem = ({ mock }) => (
    <li key={mock.id}>
        <Link to={"/mock/" + mock.id}>{mock.id}</Link>
    </li>
)

export default EndpointItem
