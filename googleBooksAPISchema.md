# Docs
https://developers.google.com/books/docs/v1/getting_started

# Sample Request
GET https://www.googleapis.com/books/v1/volumes?
q=search+term
orderBy=relevance
fields=items
projection=lite
printType=books

# Shape
```{
    items: [
        {
            selfLink,  //String
            volumeInfo: {   //Object
                infoLink, //String
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
