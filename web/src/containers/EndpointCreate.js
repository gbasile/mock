import React, { Component } from 'react'
import { withFirebase } from '../components/FirebaseContext'

class EndpointCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: props.domain,
            path: null,
            json: '{}'
        }
    }

    render() {
        return (
            <form onSubmit={this.createEndpoint}>
                <label>
                    Endpoint path
                <input type="text"
                        name="path"
                        value={this.state.path}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    JSON
                <input type="text"
                        name="json"
                        value={this.state.json}
                        onChange={this.handleInputChange} />
                </label>
                <button type="submit">Create</button>
            </form>
        )
    }

    componentWillUnmount() {
        this.ref.off()
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
        this.ref = firebase
            .firestore()
            .collection('domains')
            .doc(this.state.domain)
            .collection('endpoints')
            .doc(this.state.path)
            .set({
                json: this.state.json
            })
            .then(ref => {
                alert(`Endpoint ${this.state.path} created`)
            });
    }

    isValidJson() {
        if (this.state.json.startsWith('{')) {
            return true
        }

        return false
    }

}

export default withFirebase(EndpointCreate)