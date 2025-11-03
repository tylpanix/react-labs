import React from 'react';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import SearchBar from './components/SearchBar';
import useBookManager from './hooks/useBookManager';
import './App.css';

const App = () => {
  const { books, search, setSearch, addBook, updateBook } = useBookManager();

  return (
    <div className="app-container">
      <h1 className="title">Address Book</h1>

      <BookForm onAdd={addBook} />

      <SearchBar value={search} onChange={setSearch} />

      <BookTable books={books} onUpdate={updateBook} />
    </div>
  );
};

export default App;
