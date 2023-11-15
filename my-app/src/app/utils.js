// utils.js


//takes in clue number that is to be marked as complete
export const completeClue = (clueNumber) => {
    // checks if opned in a browser
    if (typeof window !== 'undefined') {
        // retrieves current list of completed clues and assigns to "completedClues"
        let completedClues = localStorage.getItem('completedClues');
        // checks is list is not empty
        completedClues = completedClues ? JSON.parse(completedClues) : [];
        // if list of completed clues does not include current clue number......
        if (!completedClues.includes(clueNumber)) {
            // add it to the completedClues array
            completedClues.push(clueNumber);
            // set local storage value  back to completedClues value
            localStorage.setItem('completedClues', JSON.stringify(completedClues));
        }
    }
};

// takes in number of clue trying to be acessed 
export const canAccessClue = (clueNumber) => {
    // checks if opened in a browser
    if (typeof window !== 'undefined') {
        // check for completed clues in local storage OR [] empty array if there's nothing
        const completedClues = JSON.parse(localStorage.getItem('completedClues') || '[]');

        //all clues from 0 to (clueNumber - 1) check if they exist in the completedClues array
        for (let i = 0; i < clueNumber; i++) {
            if (!completedClues.includes(i)) {
                return false;
            }
        }
        return true;
    }
    return false;
};

