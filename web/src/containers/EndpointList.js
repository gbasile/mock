import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'
import EndpointItem from './EndpointItem'

class EndpointList extends Component {
  state = {
    mocks: [],
  }
  componentDidMount() {
    const { firebase } = this.props
    this.ref = firebase
      .firestore()
      .collection('mocks')
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
