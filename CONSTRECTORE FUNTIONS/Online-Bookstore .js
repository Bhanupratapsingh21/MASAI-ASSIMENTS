function author (name , birthyear , nationality, ){
    this.name = name 
    this.birthyear = birthyear
    this.nationality = nationality
  }
  function book (title,author,genre,price) {
      this.tittle = title
      this.author = author 
      this.genre = genre
      this.price = price
  }
  book.prototype.getbookinfo = function (){
    console.log("----------------------------")
    console.log(`Tittle : ${this.tittle}`)
    console.log(`author : ${this.author.name}`)
    console.log(`Genre : ${this.genre}`)
    console.log(`price : ${this.price}`)
    console.log("----------------------------")
  }
  
  let author1 = new author("tulsidasji" , "NA","Sanatani")
  let author2 = new author("Vedviyas" , "3000 BCE", "Sanatani")
  
  let book1 = new book ("Ramayan",author1,"devotional","FREE")
  let book2 = new book("Mahabharata" , author2 , "devotional","free")
  
  
  book1.getbookinfo()
  book2.getbookinfo()