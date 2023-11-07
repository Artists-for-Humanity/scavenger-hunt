// utils.js

// utils.js
export const completeClue = (clueNumber) => {
    if (typeof window !== 'undefined') {
        const completedClues = localStorage.getItem('completedClues') || '';
        localStorage.setItem('completedClues', completedClues + `${clueNumber},`);
    }
};
