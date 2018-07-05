import React, { Component } from 'react'

class VTXDashboard extends Component {
  componentDidMount() {
    this.props.loadVTXData()
  }

  render () {
    return (
      <div>
        {'VTXDashboard'}
      </div>
    )
  }
}
export default VTXDashboard
