// ClueComponent.js

import React, { useState, useEffect } from "react";
import { completeClue, canAccessClue, } from '../utils'
import Image from 'next/image';
import Confetti from 'react-confetti';
import afh_red_tag from "../../../public/AFH_Red_Tag_Wordmark.png";

const ClueComponent = ({ clueNumber, userId, print }) => {
    const totalClues = 10;
    const errorImageSrc = '/warning.png';
    const [progress, setProgress] = useState(0);
    const gravity = .2;

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
                <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-12 text-center bg-afhNight">
                    <div className="w-full h-6 rounded-full bg-customGray relative">
                        <div className="h-6 rounded-full bg-customGreen"
                            style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                        <div className="absolute top-6 right-0 mr-2 text-white text-sm">{clueNumber}/{totalClues}</div>
                        <div className="absolute top-6 right-0 mr-2  text-white text-sm">{clueNumber}/{totalClues}</div>
                    </div>
                    <Confetti gravity={gravity} />
                    <h1 className="mb-4 mt-48 text-4xl text-orange-200 font-bold text-white font-verdana ">Congrats! You finished the Holiday Hunt!</h1>
                    <p className=" text-white text-lg font-verdana p-10 pb-1 mt-24 pb-6 ">Show this victory screen on your phone to the scavenger hunt organizer to claim your prize!</p>
                    <a href="https://www.afhboston.org/donate" className=" mb-10 text-white	 text-xl font-verdana underline decoration-dotted">Donate to AFH</a>
                    <Image src={afh_red_tag} alt="AFH Red" width={200} height={300} className="" />

                </main>
            );
        }
        return (

            <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-12 text-center bg-afhNight">
                <div className="w-full h-6 rounded-full bg-customGray relative">
                    <div className="h-6 rounded-full bg-customGreen"
                        style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
                    <div className="absolute top-6 right-0 mr-2 text-white text-sm">{clueNumber}/{totalClues}</div>
                    <div className="absolute top-6 right-0 mr-2  text-white text-sm">{clueNumber}/{totalClues}</div>
                </div>
                <div className="mb-1 text-lg font-medium text-white ">You found Clue {clueNumber}!</div>

                <div className="mb-1 text-lg font-medium text-white">Search for this  next!</div>
                <Image src={print} alt="Print Clue" width={300} height={400} className="" />
                <Image src={afh_red_tag} alt="AFH Red" width={200} height={300} className="" />


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