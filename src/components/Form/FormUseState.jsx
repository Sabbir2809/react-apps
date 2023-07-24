import React, { useRef, useState } from 'react';

const FormUseState = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
          value={person.name}
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          onChange={(e) => {
            setPerson({ ...person, age: e.target.value });
          }}
          value={person.age}
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default FormUseState;
