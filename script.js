
//Create Books class to manage the book list

class Books{
  createObject(){
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
       if (localStorage.getItem('books') != null) {
        this.books = JSON.parse(localStorage.getItem('books'));
       } 
 }

// Display the book list
 displayBooks()
 {
    const x=this.books;
    let book="";
    let displayType = 1;
     for (let i = 0; i < x.length; i += 1) {
      // document.getElementById(container).innerHTML = `<div class="display display-type-${displayType}" id="display"></div>`;
       book += `<div id='book-author'><p>"${x[i].Title}"  by  </p>`;
       book += `<p>${x[i].Author}</p> </div>`;
       book += `<button onclick="a. removeBooks(${x[i].Id});">Remove</button><br>`;
       book += '<hr>';
       if (displayType == 1) {
        displayType = 2;
      } else {
        displayType = 1;
      }
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
         this.displayBooks();
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
        this.displayBooks();
        this.saveToLocalStorage();
      }
      return true;
    });
    return filter;
 }

// Save to local storage
saveToLocalStorage(){
  localStorage.setItem('books', JSON.stringify(this.books));
}
}

// Create object of Books class
const a = new Books();
a.createObject();
a.displayBooks();
a.saveToLocalStorage();
