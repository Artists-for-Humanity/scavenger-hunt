// ClueComponent.js

import React, { useState, useEffect } from "react";
import { completeClue, canAccessClue, } from '../utils'
import Image from 'next/image';
import Confetti from 'react-confetti';

const ClueComponent = ({ clueNumber, userId, print }) => {
    const totalClues = 10;
    const errorImageSrc = '/warning.png';
    const [progress, setProgress] = useState(0);
    const confettiColors = ['#fed7aa', '#FFA07A',];
    const gravity = .6;

    useEffect(() => {
        // set initial progress
        setProgress((clueNumber / totalClues) * 100);
    }, []);

    useEffect(() => {
        // update progress
        const newProgress = (clueNumber / totalClues) * 100;
        setProgress(newProgress);
    }, [clueNumber]);

    if (canAccessClue(clueNumber, userId)) {
        completeClue(clueNumber, userId);
        if (clueNumber === totalClues) {
            // Special rendering for the final clue
            return (
                <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-12 text-center bg-white">
                    <div className="w-full h-6 rounded-full bg-customGray relative">
                        <div className="h-6 rounded-full bg-customGreen"
                            style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                        <div className="absolute top-6 right-0 mr-2 text-black text-sm">{clueNumber}/{totalClues}</div>
                        <div className="absolute top-6 right-0 mr-2  text-black text-sm">{clueNumber}/{totalClues}</div>
                    </div>
                    <Confetti colors={confettiColors} gravity={gravity} />
                    {/* <Confetti gravity={gravity} /> */}
                    <h1 className="mb-4 mt-48 text-4xl text-orange-200 font-bold text-black font-cherry">Congrats! You finished the Holiday Hunt!</h1>
                    <p className=" text-black text-lg font-cherry p-10 pb-1 mt-24">Return to the start to receive a free print of your choice. Thanks for playing!</p>
                    <a href="https://www.afhboston.org/donate" className=" mb-20 text-black	 text-xl font-cherry underline decoration-dotted">Donate to AFH</a>
                </main>
            );
        }
        return (

            <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-12 text-center bg-white">
                <div className="w-full h-6 rounded-full bg-customGray relative">
                    <div className="h-6 rounded-full bg-customGreen"
                        style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                    <div className="absolute top-6 right-0 mr-2 text-black text-sm">{clueNumber}/{totalClues}</div>
                    <div className="absolute top-6 right-0 mr-2  text-black text-sm">{clueNumber}/{totalClues}</div>
                </div>
                <div className="mb-1 text-lg font-medium text-black ">You found Clue {clueNumber}!</div>

                <div className="mb-1 text-lg font-medium text-black">Search for this  next!</div>
                <Image src={print} alt="Print Clue" width={300} height={400} className="pb-32" />


            </main>
        );
    } else {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-12 text-center bg-gray-200">
                <Image src={errorImageSrc} alt="Error" width={200} height={200} />
                <div className="text-red-500 font-bold">You need to find clue {clueNumber - 1} first!</div>
            </main>
        );
    };
}

export default ClueComponent;