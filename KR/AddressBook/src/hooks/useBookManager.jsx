import { useState } from 'react';

export default function useBookManager() {
  const [bookList, setBookList] = useState([]);
  const [search, setSearch] = useState('');

  const validate = (book) => {
    const errors = {};
    if (!book.firstName.trim()) errors.firstName = 'The first name is required';
    if (!book.lastName.trim()) errors.lastName = 'The last name is required';
    if (!book.phone.trim()) errors.phone = 'The phone is required';
    return errors;
  };

  const addBook = (book) => {
    const errors = validate(book);
    if (Object.keys(errors).length > 0) return { success: false, errors };

    const newBook = { ...book, id: Date.now() };
    setBookList((prev) => [...prev, newBook]);
    return { success: true };
  };

  const updateBook = (id, editedBook) => {
    const errors = validate(editedBook);
    if (Object.keys(errors).length > 0) return { success: false, errors };

    setBookList((prev) =>
      prev.map((b) => (b.id === id ? { ...editedBook, id } : b))
    );
    return { success: true };
  };

  const filtered = bookList.filter(
    (b) =>
      b.firstName.toLowerCase().includes(search.toLowerCase()) ||
      b.lastName.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search)
  );

  return { books: filtered, search, setSearch, addBook, updateBook };
}
