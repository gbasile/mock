import React, { Component } from 'react'
import { withFirebase } from '../FirebaseContext'

class AuthenticationInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      domain: props.domain,
      api_key: null,
    }
  }

  setState(params) {
    if (this._mounted) {
      super.setState(params)
    }
  }

  render() {
    if (this.state.api_key == null) {
      return <p>No authentication required</p>
    } else {
      return <p>Api key is {this.state.api_key}</p>
    }
  }

  componentDidMount() {
    this._mounted = true
    const { firebase } = this.props
    this.ref = firebase
      .firestore()
      .collection('domains')
      .doc(this.state.domain)

    this.ref.onSnapshot(snapshot => {
      let data = snapshot.data()
      this.setState({
        api_key: data['api_key'],
      })
    })
  }

  componentWillUnmount() {
    this._mounted = true
  }
}

export default withFirebase(AuthenticationInfo)
