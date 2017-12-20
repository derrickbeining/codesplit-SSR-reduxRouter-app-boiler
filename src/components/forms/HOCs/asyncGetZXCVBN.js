// zxcvbn is a library for measuring password strength offered by Dropbox
// it's kind of big, so I'd rather load it async

import React from 'react'

export default Component => {
  class ZXCVBNLoader extends React.Component {
    constructor(props) {
      super(props)
      this.state = { testPasswordStrength: () => undefined }
    }

    componentDidMount() {
      System.import('zxcvbn')
        .then(testPasswordStrength => this.setState({ testPasswordStrength }))
    }

    render() {
      return <Component testPasswordStrength={this.state.testPasswordStrength} {...this.props} />
    }
  }

  return ZXCVBNLoader
}
