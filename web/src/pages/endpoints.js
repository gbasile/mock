import React, { Component }  from 'react'
import SignOut from '../containers/SignOut'
import { withFirebase } from '../components/FirebaseContext'
import Layout from '../components/layout'
import EndpointList from '../containers/EndpointList'
import EndpointCreate from '../containers/EndpointCreate'
import IndexPage from '.'

class EndpointsPage extends Component {
  state = {
    domain: ''
  }

  componentDidMount() {
    const { firebase } = this.props

    this.ref = firebase.auth()
      .onAuthStateChanged(user => {
        if (user) {
          let domain = user.email.split("@")[1]
          this.setState({ domain: domain })
        } else {
          this.setState({ domain: '' })
        }
      })
  }

  componentWillUnmount() {
    this.ref.off()
  }

  render() {
    if (this.state.domain == '') {
      return <Layout><h1>Logging in</h1></Layout>
    } else {
      return (
        <Layout>
          <h1>Endpoints availables</h1>
          <EndpointCreate domain = {this.state.domain}/>
          <EndpointList domain = {this.state.domain}/>
          <SignOut />
        </Layout >
      )
    }
  }
}

export default withFirebase(EndpointsPage)
