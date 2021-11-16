import React from 'react';
import { Book } from '../../interfaces/Book.interface';
import './BookItem.css';

interface Props {
  book: Book;
  removeBook: (bookId: string) => void;
}

const BookItem: React.FC<Props> = ({ book, removeBook }) => (
  <li className="book-item">
    {book.title} by {book.author}, {book.price}$
    <button className="btn" onClick={e => removeBook(book.id)}>Remove</button>
  </li>
);

export default BookItem;