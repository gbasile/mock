import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'

class EndpointList extends Component {
  state = {
    mocks: [],
  }
  componentDidMount() {
    const { firebase } = this.props
    firebase
      .firestore()
      .collection('mocks')
      .onSnapshot((snapshot) => {
        this.setState({
          mocks: snapshot.docs,
        })
      })
  }
  render() {
    const { mocks } = this.state

    if (mocks.length == 0) {
      return <p>No endpoints available</p>
    }

    return (
      <ul> 
        {
          mocks.map((mock) => {
              return <p key={mock.id}> {mock.id} </p>
          })
        }
      </ul>
    )
  }
}

export default withFirebase(EndpointList)