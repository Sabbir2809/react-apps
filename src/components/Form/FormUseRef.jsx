import React, { useRef } from 'react';

const FormUseRef = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const person = { name: '', age: 0 };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = ageRef.current.value;
    }
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input ref={nameRef} id='name' type='text' className='form-control' />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input ref={ageRef} id='age' type='number' className='form-control' />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default FormUseRef;
