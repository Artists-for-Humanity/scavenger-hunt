// pages/clue2.js
import ClueComponent from '../../components/ClueComponent';
import { completeClue } from '../../utils'

export default function Clue2Page() {
    completeClue(1);
  // Assuming the check has passed, render the ClueComponent
  return <ClueComponent clueNumber={2} progressPercentage={20} />;
}
