// ClueComponent.js

import React from "react";

const ClueComponent = ({ clueNumber, progressPercentage }) => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-96 pt-96 text-center bg-indigo-600">

            <div className="mb-1 text-lg font-medium text-white">You found Clue {clueNumber}!</div>

            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: `${progressPercentage}%` }}></div>
            </div>

        </main>
    );
};

export default ClueComponent;
