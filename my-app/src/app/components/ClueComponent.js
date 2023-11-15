// ClueComponent.js

import React from "react";
import { completeClue, canAccessClue } from '../utils'
import Image from 'next/image';

const ClueComponent = ({ clueNumber }) => {
    const totalClues = 10;
    const errorImageSrc = '/warning.png';


    if (!canAccessClue(clueNumber)) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-6 pt-12 text-center bg-gray-200">
                <Image src={errorImageSrc} alt="Error" width={200} height={200} />
                <div className="text-red-500 font-bold">You need to find clue {clueNumber - 1} first!</div>
            </main>
        );
    } else {
        completeClue(clueNumber);
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-6 pt-12 text-center bg-white">
                <div className="w-full h-6 rounded-full bg-customGray relative">
                    <div className="h-6 rounded-full bg-customGreen" style={{ width: `${(clueNumber / totalClues) * 100}%` }}></div>
                    <div className="absolute top-6 right-0 mr-2  text-black text-sm">{clueNumber}/{totalClues}</div>
                </div>
                <div className="mb-1 text-lg font-medium text-black pb-96">You found Clue {clueNumber}!</div>
            </main>
        );
    };
}

export default ClueComponent;