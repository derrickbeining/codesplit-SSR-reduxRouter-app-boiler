import React from 'react'
import { Fieldset } from 'react-redux-form'
import PasswordInput from './PasswordInput'
import { fieldsetContainer } from './FieldsetStyles'

export default class PasswordFieldset extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordIsSecure: val => val,
      generateErrorMsg: val => val
    }
  }

  componentDidMount() {
    // kind of large module, want to load it async to render quicker
    import('components/forms/validators/passwordIsSecure')
      .then(fns => this.setState({
        passwordIsSecure: fns.default,
        generateErrorMsg: fns.generateErrorMsg
      }))
  }

  render() {
    return (
      <Fieldset model={this.props.model} className={fieldsetContainer}>
        <PasswordInput
          controlProps={{
            id: '.password',
            label: 'Password'
          }}
          errorMsgs={{
            passwordIsSecure: this.state.generateErrorMsg
          }}
          model='.password'
          validators={{
            passwordIsSecure: this.state.passwordIsSecure
          }}
          validateOn='change'
        />

        <PasswordInput
          id='.confirmPassword'
          label='Confirm Password'
          model='.confirmPassword'
        />
      </Fieldset>
    )
  }
}

