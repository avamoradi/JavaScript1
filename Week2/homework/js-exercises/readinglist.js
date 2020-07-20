'use strict'

const books =
 [{title :'Harry Potter and the Half-Blood Prince' ,
  author:'jk rowling', 
  alreadyRead: true},

  {title :'Harry Potter and the Deathly Hallows' ,
    author:'jk rowling',
    alreadyRead:true},

  {title :'Fantastic Beasts and Where to Find Them' ,
    author:'jk rowling',
    alreadyRead:false}]

    for (let i = 0; i< books.length ; i++) {
      console.log(books[i].title + " by " + books[i].author)
      if (books[i].alreadyRead == true) {
        console.log('you already read ' + '"' + books[i].title  + '"')
      } else {
        console.log('you still need to read ' + '"' + books[i].title  + '"')
      }
    }