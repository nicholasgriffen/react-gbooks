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
        <form onSubmit ={this.onSubmit}>
            <input 
                type="search"
                onChange={this.onChange}
                value={this.state.searchTerm}
            ></input>
            <button>Search</button>    
        </form>
        )
    }
}

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired
}