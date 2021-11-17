import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from '../BookItem/BookItem';
import { Book } from '../../interfaces/Book.interface';
import { StoreState } from '../../redux/mainTypes';
import { removeBook as removeBookAction, getAllBooks } from './../../redux/booksRedux';

import './BooksList.css';

const BooksList: React.FC = () => {

  const dispatch = useDispatch();
  const books = useSelector((state: StoreState) => getAllBooks(state));
  const removeBook = (id: string) => dispatch(removeBookAction(id));

  return (
    <ul className="books-list">
      {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={removeBook} />)}
    </ul>
  );
}

export default BooksList;