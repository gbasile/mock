import React from 'react'

const EndpointItem = ({ mock }) => (
    <li>
        <a href={`https://us-central1-mock-a50e1.cloudfunctions.net/serveJSON/${mock.id}`}>{mock.id}</a>
    </li>
)

export default EndpointItem
