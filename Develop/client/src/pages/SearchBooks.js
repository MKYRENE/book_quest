import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from './mutations'; // Make sure to import your mutation from the correct file

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState(''); // Declare searchInput state
  const [searchedBooks, setSearchedBooks] = useState([]); // Declare searchedBooks state
  const [savedBookIds, setSavedBookIds] = useState([]); // Declare savedBookIds state

  const [saveBook] = useMutation(SAVE_BOOK);

  // ... Rest of your component code ...

  const handleSaveBook = async (bookId) => {
    // Find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    // Get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveBook({
        variables: {
          // Provide actual variables needed for the mutation
          bookId: bookToSave.bookId,
          authors: bookToSave.authors,
          title: bookToSave.title,
          description: bookToSave.description,
          image: bookToSave.image,
          link: bookToSave.link,
        },
      });

      // Handle success
      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  // ... Rest of your component code ...

  return (
    <>
      {/* Your component JSX */}
    </>
  );
};

export default SearchBooks;
