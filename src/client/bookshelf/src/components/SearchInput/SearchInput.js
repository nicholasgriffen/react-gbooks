import React from 'react'

export default class SearchInput extends React.Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    onChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
        this.props.onChange(e.target.value)
    }
    
    render() {
        return (
            <input 
                type="search"
                onChange={this.onChange}
                value={this.state.searchTerm}
            ></input>
        )
    }
}
