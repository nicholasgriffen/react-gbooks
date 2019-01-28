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
        this.props.onChange(e.target.value)

        this.setState({
            searchTerm: e.target.value
        })
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

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired
}