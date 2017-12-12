import React from 'react'

const addScrollListener = fn => {
  window.addEventListener('scroll', fn, true)
}

const removeScrollListener = fn => {
  window.removeEventListener('scroll', fn, true)
}

export default Component => {
  class ShowHideDetector extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        show: true
      }
      this.handleScrollDown = this.handleScrollDown.bind(this)
      this.handleScrollUp = this.handleScrollUp.bind(this)
    }

    componentDidMount() {
      addScrollListener(this.handleScrollDown)
    }

    componentDidUpdate() {
      if (this.state.show) {
        addScrollListener(this.handleScrollDown)
      } else {
        addScrollListener(this.handleScrollUp)
      }
    }

    handleScrollDown(evt) {
      if (evt.pageY > this.lastScrollY) {
        removeScrollListener(this.handleScrollDown)
        this.setState({ show: false })
      }
      this.lastScrollY = evt.pageY
    }

    handleScrollUp(evt) {
      if (evt.pageY < this.lastScrollY) {
        removeScrollListener(this.handleScrollUp)
        this.setState({ show: true })
      }
      this.lastScrollY = evt.pageY
    }

    render() {
      return <Component show={this.state.show} {...this.props} />
    }
  }

  return ShowHideDetector
}
