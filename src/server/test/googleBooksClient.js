import { get } from "https";

const schema = {
  items: [
    {
        selfLink,  //String
        volumeInfo: {   //Object
            title,  //String
            authors: [  //Array
                ""  //String
            ],
            publisher, //String
            publishedDate, //Date
            imageLinks: { //Object
                smallThumbnail, //String
                thumbnail //String
            }
        }
    }
  ]
}

describe('get.googleBooks', () => {
  it('is a function', () => {
    expect(get.googleBooks).to.be.a('function')
  })
  it('returns object with keys and nested keys equal to those in the schema ', () => {
    expect(get.googleBooks()).to.be.an('object').that.has.all.deep.keys(schema)
  })
})