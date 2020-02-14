import React from 'react'
import { Link } from 'gatsby'

const EndpointItem = ({ mock }) => (
    <li key={mock.id}>
        <a href={`https://us-central1-mock-a50e1.cloudfunctions.net/serveJSON/${mock.id}`}>{mock.id}</a>
    </li>
)

export default EndpointItem
