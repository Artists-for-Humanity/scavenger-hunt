'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  //set userName variable and setUserName to change/update username
  const[userName, setUserName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  //triggered when form is submitted
  const handleSubmit = (e: any) => {
    //prevent default reload of  page from submitting form
    e.preventDefault();
    //check if username isn't empty
    if (userName) {
      //set username and initial clue [0]
      localStorage.setItem('userName', userName);
      localStorage.setItem('completedClues', JSON.stringify([0]));
      setFormSubmitted(true); 
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-60 pb-96  text-center  bg-white">
     {formSubmitted ? ( // Conditional rendering
        <div className="text-4xl text-orange-200 font-cherry mt-20">Thanks, get hunting!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-1 pb-20 text-4xl text-orange-200	font-cherry">Let's start our Scavenger Hunt!</div>
          <div className='flex flex-col justify-center pl-20 pr-20'>
            <input
              type="text"
              name="username"
              placeholder="Enter your name..."
              className="mt-2 p-2 text-black"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ textAlign: 'center' }}
            />
            <input
              type="submit"
              value="Enter"
              className="mt-4 p-2 bg-black text-white font-bold rounded hover:bg-black transition duration-300"
            />
          </div>
        </form>
      )}
  </main>
  );
}

