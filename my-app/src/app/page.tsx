'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  //set userName variable and setUserName to change/update username
  const[userName, setUserName] = useState('');

  //triggered when form is submitted
  const handleSubmit = (e: any) => {
    //prevent default reload of  page from submitting form
    e.preventDefault();
    //check if username isn't empty
    if (userName) {
      //set username and initial clue [0]
      localStorage.setItem('userName', userName);
      localStorage.setItem('completedClues', JSON.stringify([0]));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-96 pt-96 text-center  bg-white">
    {/* form element that calls handleSubmit on submit */}
    <form onSubmit={handleSubmit}>
      <div className="mb-1 text-lg font-medium text-white">Lets start our Scavenger Hunt!</div>
      <input
        type="text"
        name="username"
        placeholder="Enter your name..."
        className="mt-2 p-2 text-black"
        // input field bound to userName field and updated on setUserName
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="submit"
        value="Enter"
        className="mt-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
      />
    </form>
  </main>
  );
}

