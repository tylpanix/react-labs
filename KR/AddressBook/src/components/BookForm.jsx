import React, { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [data, setData] = useState({ firstName: '', lastName: '', phone: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = onAdd(data);
    if (result.success) {
      setData({ firstName: '', lastName: '', phone: '' });
      setErrors({});
    } else {
      setErrors(result.errors);
    }
  };

  const ErrorMsg = ({ field }) =>
    errors[field] ? <p className="error">{errors[field]}</p> : null;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>

      <div className="inputs">
        <div>
          <input
            name="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'input-error' : ''}
          />
          <ErrorMsg field="firstName" />
        </div>

        <div>
          <input
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'input-error' : ''}
          />
          <ErrorMsg field="lastName" />
        </div>

        <div>
          <input
            name="phone"
            placeholder="Phone"
            value={data.phone}
            onChange={handleChange}
            className={errors.phone ? 'input-error' : ''}
          />
          <ErrorMsg field="phone" />
        </div>
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default BookForm;
