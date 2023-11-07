
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue8Page() {
  completeClue(7);
  
  return <ClueComponent clueNumber={8} progressPercentage={80} />;
}
