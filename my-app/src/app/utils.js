// utils.js

export const generateUniqueID = () => {
    let uniqueID;
    do {
        uniqueID = Math.floor(1000 + Math.random() * 9000).toString();
    } while (localStorage.getItem(uniqueID)); // Ensure ID is unique
    return uniqueID;
};

export const completeClue = (clueNumber, userId) => {
    if (typeof window !== 'undefined') {
        const key = `completedClues_${userId}`;
        let completedClues = localStorage.getItem(key);
        completedClues = completedClues ? JSON.parse(completedClues) : [];
        if (!completedClues.includes(clueNumber)) {
            completedClues.push(clueNumber);
            localStorage.setItem(key, JSON.stringify(completedClues));
        }
    }
};

export const canAccessClue = (clueNumber, userId) => {
    if (typeof window !== 'undefined') {
        const key = `completedClues_${userId}`;
        console.log(key)

        const completedClues = JSON.parse(localStorage.getItem(key) || '[]');
        for (let i = 0; i < clueNumber; i++) {
            if (!completedClues.includes(i)) {
                return false;
            }
        }
        return true;
    }
    return false;
};

