import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import EndpointItem from './EndpointItem'

class EndpointList extends Component {
  state = {
    mocks: [],
  }
  componentDidMount() {
    const { firebase } = this.props
    let domain = firebase.auth().currentUser.email.split("@")[1]
    this.ref = firebase
      .firestore()
      .collection('domains')
      .doc(domain)
      .collection('endpoints')
      .onSnapshot((snapshot) => {
        this.setState({
          mocks: snapshot.docs,
        })
      })
  }

  componentWillUnmount() {
    this.ref.off()
  }

  render() {
    const { mocks } = this.state

    if (mocks.length == 0) {
      return <p>No endpoints available</p>
    }

    return (
      <ul> 
        {mocks.map(mock => (<EndpointItem key={mock.id} mock = {mock} />))}
      </ul>
    )
  }
}

export default withFirebase(EndpointList)
