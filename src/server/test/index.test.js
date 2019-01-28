const chai = require('chai')
const { expect } = chai
const app = require('../index')

chai.use(require('chai-http'))

describe('server', () => {
    it('responds to a get at / with status 200', () => {
        return chai
            .request(app)
            .get('/')
            .then(res => {
                expect(res.status).to.equal(200)
            })
    })
})