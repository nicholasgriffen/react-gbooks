const chai = require('chai')
const { expect } = chai

const app = require('../index')
const schema = require('./googleBooksSchema')

chai.use(require('chai-http'))

describe('/books', () => {
    it('responds to a get with status 200 and JSON object matching the schema', () => {
        return chai
            .request(app)
            .get('/books')
            .then(res => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.an('object').that.has.all.deep.keys(schema)
            })
    })
})