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
            selfLink,  
            volumeInfo: {  
                title,  
                authors: [  
                    ""  
                ],
                publisher,
                publishedDate,
                imageLinks: {
                    smallThumbnail, 
                    thumbnail 
                }
            }
        }
    ]
}```