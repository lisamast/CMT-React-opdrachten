import { useState } from 'react';
import Book from './Book';

const BookList = () => {

        const [books, setBooks] = useState([
            { img: "./public/images/book-1.png", title: "Harry Potter and the Sorcerer's stone", auteur: "Joanne Rowling"},
            { img: "./public/images/book-2.png", title: "Fantasia 6", auteur: "Geronimo Stilton"},
            { img: "./public/images/book-3.png", title: "The Hunger Games", auteur: "Suzanne Collins"}
        ])
 

    return (
      <>
      <h2>Boeken</h2>
    <section className='books-container'>
      
      {books.map(book => (
        <Book title={book.title} img={book.img} auteur={book.auteur}/>
      ))}
    </section>
    </>
  );

    // return (
    //     <section>
    //         <Book img="./public/images/book-1.png" />
    //         <Book title="Harry Potter and the Sorcerer's stone" />
    //         <Book auteur="Joanne Rowling" />

    //         <Book img="./public/images/book-2.png" />
    //         <Book title="Fantasia 6" />
    //         <Book auteur="Geronimo Stilton" />

    //         <Book img="./public/images/book-3.png" />
    //         <Book title="The Hunger Games" />
    //         <Book auteur="Suzanne Collins" />
    //     </section>
    // );
}


export default BookList;