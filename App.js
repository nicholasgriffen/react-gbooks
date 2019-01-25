import { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            searchTerm: '',
            filter: false,
            books: []
        }
    }

    render() {
        return (
            <Router>
                <Header />
                <SearchBar />
                <Books />
                <Footer />
            </Router>
        )
    }
}