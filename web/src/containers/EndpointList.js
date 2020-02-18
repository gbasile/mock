import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import EndpointItem from './EndpointItem'

class EndpointList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: props.domain,
      endpoints: []
    }
  }

  componentDidMount() {
    const { firebase } = this.props
    this.ref = firebase
      .firestore()
      .collection('domains')
      .doc(this.state.domain)
      .collection('endpoints')
      .onSnapshot((snapshot) => {
        this.setState({
          endpoints: snapshot.docs,
        })
      })
  }
  
  componentWillUnmount() {
    this.ref.off()
  }

  render() {
    let endpoints = this.state.endpoints
    let domain = this.state.domain

    if (endpoints.length == 0) {
      return <p>No endpoints available</p>
    }

    return (
      <ul>
        {endpoints.map(endpoint => (<EndpointItem key={endpoint.id} endpoint={endpoint} domain={domain}/>))}
      </ul>
    )
  }
}

export default withFirebase(EndpointList)
