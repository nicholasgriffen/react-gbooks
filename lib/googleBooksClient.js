const fetch = require('node-fetch')

module.exports = {
    search: async (term = 'books') => {
        const searchQuery = `?q=${encodeURIComponent(term)}`

        const url = `${process.env.API_ENDPOINT}${searchQuery}&fields=items&projection=lite&key=${process.env.API_KEY}`
        const res = await fetch(url)
        
        if (res.status !== 200) {
            error = new Error(`Get to ${url} failed with status ${res.status}`)
            error.status = res.status 
            return Promise.reject(error)
        }

        const json = await res.json()
        
        return json
    }
}