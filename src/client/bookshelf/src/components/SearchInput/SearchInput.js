import React from 'react'
import PropTypes from 'prop-types'  

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
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }
    
    render() {
        return (
        <form 
        style={{
            display: "flex", 
            "flexDirection": "row",
            "justifyContent": "space-between" 
            }}onSubmit={this.onSubmit}>
            <input
                style={{flex: "auto"}}
                type="search"
                onChange={this.onChange}
                value={this.state.searchTerm}
            ></input>
            <button
                style={{flex: "auto"}}
                >Search</button>    
        </form>
        )
    }
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
}