import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import EndpointItem from './EndpointItem'

class EndpointList extends Component {
  state = {
    domain: '',
    endpoints: []
  }

  componentDidMount() {
    const { firebase } = this.props

    this.authRef = firebase.auth()
      .onAuthStateChanged(user => {
        if (user) {
          let domain = user.email.split("@")[1]
          this.setState({ domain: domain })
          this.updateEndpoints(domain)
        } else {
          this.setState({ domain: '' })
        }
      })
  }

  updateEndpoints(domain) {
    const { firebase } = this.props
    this.ref = firebase
      .firestore()
      .collection('domains')
      .doc(domain)
      .collection('endpoints')
      .onSnapshot((snapshot) => {
        this.setState({
          endpoints: snapshot.docs,
        })
      })
  }

  componentWillUnmount() {
    this.ref.off()
    this.authRef.off()
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
