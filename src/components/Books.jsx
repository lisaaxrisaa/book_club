/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from '../Slice/apiSlice.js';
import { useState } from 'react';

const BookList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetBooksQuery();
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  const books = data?.books || [];

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(lowerCaseSearchTerm)
  );

  return (
    <div>
      <h1>Book List</h1>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredBooks.length > 0 ? (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author}
              <button onClick={() => navigate(`/books/${book.id}`)}>
                More Info
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books match your search.</p>
      )}
    </div>
  );
};

export default BookList;
