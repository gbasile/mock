import React, { Component } from 'react'
import { withFirebase } from '../FirebaseContext'

class EndpointCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      domain: props.domain,
      path: '',
      json: '',
    }
  }

  render() {
    return (
      <form onSubmit={this.createEndpoint}>
        <input
          type="text"
          name="path"
          placeholder="Insert the path"
          value={this.state.path}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          name="json"
          placeholder="Paste your JSON here"
          value={this.state.json}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    )
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  createEndpoint = event => {
    event.preventDefault()

    if (this.state.path.length < 3) {
      alert('Please input a valid path (at least 3 chars)')
      return
    }

    if (!this.isValidJson) {
      alert('Please input a valid json')
      return
    }

    const { firebase } = this.props
    firebase
      .firestore()
      .collection('domains')
      .doc(this.state.domain)
      .collection('endpoints')
      .doc(this.state.path)
      .set({
        json: this.state.json,
      })
      .then(ref => {
        alert(`Endpoint ${this.state.path} created`)
      })
  }

  isValidJson() {
    if (this.state.json.startsWith('{')) {
      return true
    }

    return false
  }
}

export default withFirebase(EndpointCreate)
