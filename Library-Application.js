class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    
    showInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

const libraryCollection = [];


const searchByTitle = (title) => libraryCollection.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));


const addNewBook = (title, author, pages) => {
    const newBook = new Book(title, author, pages);
    libraryCollection.push(newBook);
};


const searchByAuthor = (author) => libraryCollection.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));


const filterBooksByPages = () => libraryCollection.filter(book => book.pages > 100);

const modifyBookDetails = () => libraryCollection.map(book => {
    book.title = `Title: ${book.title}`;
    book.author = `Author: ${book.author}`;
    return book;
});
