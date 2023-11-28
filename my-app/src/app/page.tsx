'use client';
import React, { useState } from 'react';
import { generateUniqueID } from './utils';
import print1 from '../../public/print1.jpg';
import Image from 'next/image';
import afh_red_tag from "../../public/AFH_Red_Tag_Wordmark.png";


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
    <main className="flex min-h-screen flex-col items-center justify-between p-12 pt-32 pb-96 text-center bg-afhNight">
      {formSubmitted ? (
  
        // If the form has been submitted, display the thank you message and proceed to hunt
        <div >
        <div className="text-4xl text-afhRed font-verdana pb-12">Thanks, {userName}. Get Hunting!</div>
        <div className='text-afhRed text-xl font-verdana'>Look for this print first!</div>
        <div className="flex justify-center items-center">
        <Image src={print1} alt="Print Clue" width={300} height={400} className="pb-32" />
        <Image src={afh_red_tag} alt="AFH Red" width={300} height={400} className="pb-32" />

        </div>
        </div>
      
  
   
      ) : (
        // Otherwise, show the form to enter the user name
        <form onSubmit={handleSubmit}>
          <div className="mb-1 pb-20 text-4xl text-afhRed font-verdana">Lets start our Scavenger Hunt!!</div>
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
