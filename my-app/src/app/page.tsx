'use client';
import React, { useState } from 'react';
import { generateUniqueID } from './utils';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (userName.trim()) {
      let userID = Object.keys(localStorage).find(key => 
        localStorage.getItem(key) === userName && key.startsWith('completedClues_')
      )?.split('_')[1];

      if (!userID) {
        userID = generateUniqueID();
        localStorage.setItem(`completedClues_${userID}`, JSON.stringify([0]));
      }

      localStorage.setItem('userID', userID);
      localStorage.setItem('userName', userName);

      setFormSubmitted(true); // Update the formSubmitted state to true
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-60 pb-96 text-center bg-white">
      {formSubmitted ? (
        // If the form has been submitted, display the thank you message and proceed to hunt
        <div className="text-4xl text-orange-200 font-cherry mt-20">Thanks, {userName}. Get hunting!</div>
      ) : (
        // Otherwise, show the form to enter the user name
        <form onSubmit={handleSubmit}>
          <div className="mb-1 pb-20 text-4xl text-orange-200 font-cherry">Let's start our Scavenger Hunt!</div>
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
