import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/navbar.component';
import BookList from './components/book/book-list.component';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
