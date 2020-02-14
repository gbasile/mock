import React from 'react'
import { StyledFirebaseAuth } from 'react-firebaseui'

import { getUiConfig } from '../firebase'
import { withFirebase } from '../components/FirebaseContext'
import Header from '../components/header'

const SignIn = ({ firebase }) => (
  <div>
    <Header siteTitle="🚀 Mocks" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4>You need to login to browse your endpoints</h4>
    </div>
    <StyledFirebaseAuth
      uiConfig={getUiConfig(firebase)}
      firebaseAuth={firebase.auth()}
    />
  </div>
)

export default withFirebase(SignIn)
