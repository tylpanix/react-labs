import React from 'react';
import BookRow from './BookRow';

const BookTable = ({ books, onUpdate }) => {
  if (books.length === 0) {
    return <p className="no-data">No data to display</p>;
  }

  return (
    <table className="book-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((b) => (
          <BookRow key={b.id} book={b} onUpdate={onUpdate} />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
