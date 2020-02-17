import React from 'react'

const EndpointItem = ({ endpoint, domain }) => (
    <li>
        <a href={`https://us-central1-mock-a50e1.cloudfunctions.net/serveJSON/${domain}/${endpoint.id}`}>{endpoint.id}</a>
    </li>
)

export default EndpointItem
