import React from 'react';
import { Book } from '../../interfaces/Book.interface';
import './BookItem.css';

interface Props {
  book: Book;
}

const BookItem: React.FC<Props> = ({ book }) => (
  <li className="book-item">
    {book.title} by {book.author}, {book.price}$
  </li>
);

export default BookItem;