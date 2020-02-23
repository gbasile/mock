import React, { Component } from 'react'
import SignOut from '../Authentication/SignOut'
import { withFirebase } from '../FirebaseContext'
import EndpointList from './EndpointList'
import EndpointCreate from './EndpointCreate'
import AuthenticationInfo from './AuthenticationInfo'

class Endpoints extends Component {
  state = { domain: null }

  componentDidMount() {
    const { firebase } = this.props

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let domain = user.email.split('@')[1]
        this.setState({ domain: domain })
      }
    })
  }

  render() {
    if (this.state.domain == null) {
      return <h1>Logging in</h1>
    } else {
      return (
        <div>
          <h1>Auth</h1>
          <AuthenticationInfo domain={this.state.domain} />
          <h1>Create new endpoint</h1>
          <EndpointCreate domain={this.state.domain} />
          <h1>Endpoints availables</h1>
          <EndpointList domain={this.state.domain} />
        </div>
      )
    }
  }
}

export default withFirebase(Endpoints)
