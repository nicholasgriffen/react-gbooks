const chai = require('chai')
const { expect } = chai
const app = require('../index')

chai.use(require('chai-http'))

describe('/books', () => {
    it('responds to a get with status 200', () => {
        return chai
            .request(app)
            .get('/books')
            .then(res => {
                expect(res.status).to.equal(200)
            })
    })
})