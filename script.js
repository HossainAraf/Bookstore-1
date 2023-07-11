
//Create Books class to manage the book list

class Books{
  creatObject(){
    this.books = [
         {
           Id: 1,
           Title: 'Lorem ipsum',
           Author: 'Testeroo Testyy',
         },
         {
           Id: 2,
           Title: 'Second Books',
           Author: 'Testeroo Testyy',
         },
       ];
 }
// Display the book list
 displayBookks()
 {
    const x=this.books;
    let book="";
     for (let i = 0; i < x.length; i += 1) {
       book += `<p>${x[i].Title}</p>`;
       book += `<p>${x[i].Author}</p>`;
       book += `<button onclick="a. removeBooks(${x[i].Id});">Remove</button><br>`;
       book += '<hr>';
     }
     document.getElementById('display').innerHTML = book;
 }
   
//Add books
addBooks()
{

      let x=this.books;
       const title = document.getElementById('Title').value;
       const author = document.getElementById('Author').value;
       if (title!="" && author!="") {
        
         const bookId = x.length + 1;
         x.push({ Id: bookId, Title: title, Author: author });
         this.displayBookks();
         document.querySelector('form').reset();
         this.saveToLocalStorage();
       //   alert(bookId);
       }
}

// Remove books from the list
removeBooks(removeId){
  let book=this.books;
  const filter = book.filter((remBook, i) => {
      if (removeId === remBook.Id) {
        book.splice(i, 1);
        this.displayBookks();
        this.saveToLocalStorage();
      }
      return true;
    });
    return filter;
 }
}
  
