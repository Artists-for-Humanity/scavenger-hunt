'use client';

import React, { useState, useEffect } from 'react';
import ClueComponent from '../../components/ClueComponent'
import print8 from '../../../../public/print8.jpg'


export default function Clue7Page() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // when the component mounts, retrieve the userID from local storage
    const storedUserId = localStorage.getItem('userID');
    if (storedUserId) {
      setUserId(storedUserId);
    }
    // if there's no userID in local storage, you should handle it appropriately
  }, []);

  //  render the ClueComponent if the userId is not empty
  return userId ? (
    <ClueComponent clueNumber={7} userId={userId} print={print8} />
  ) : (
    <div>Loading or handle the missing userID appropriately</div>
  );
}
