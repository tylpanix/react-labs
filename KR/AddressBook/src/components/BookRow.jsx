import React, { useState } from 'react';

const BookRow = ({ book, onUpdate }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(book);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save = () => {
    const res = onUpdate(book.id, form);
    if (res.success) {
      setEdit(false);
      setErrors({});
    } else {
      setErrors(res.errors);
    }
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>
        {edit ? (
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'input-error' : ''}
          />
        ) : (
          book.firstName
        )}
        {errors.firstName && <div className="error-inline">{errors.firstName}</div>}
      </td>
      <td>
        {edit ? (
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'input-error' : ''}
          />
        ) : (
          book.lastName
        )}
        {errors.lastName && <div className="error-inline">{errors.lastName}</div>}
      </td>
      <td>
        {edit ? (
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? 'input-error' : ''}
          />
        ) : (
          book.phone
        )}
        {errors.phone && <div className="error-inline">{errors.phone}</div>}
      </td>
      <td>
        {edit ? (
          <button onClick={save}>Save</button>
        ) : (
          <button onClick={() => setEdit(true)}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default BookRow;
