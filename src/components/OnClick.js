import React, { Component } from 'react'

export default class OnClick extends Component {
    render() {
        return (
            <option value={this.props.value} >{this.props.value}</option>
        )
    }
}
