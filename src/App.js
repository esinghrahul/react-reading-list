import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/navbar.component';
import BookList from './components/book/book-list.component';
import BookForm from './components/book/book-form.component';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
