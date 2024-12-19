import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './components/Books';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SingleBook from './components/SingleBook';
import Account from './components/Account';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
