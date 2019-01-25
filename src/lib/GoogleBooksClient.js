export default class GoogleBooksClient {
    constructor() {
        super()
        this.state.endpoint = process.env.REACT_APP_REQUEST_URL
    }
    queryEndpoint = async () => {
        return await fetch(this.state.endpoint).json()
        .catch(err => {
            let message  
            if (process.env.NODE_ENV === 'development') {
                message = `Google API fetch failed with ${err}`
            } else {
                message = `We're having trouble finding books`
            }
            Promise.reject(new Error(message))            
        })
    }
}