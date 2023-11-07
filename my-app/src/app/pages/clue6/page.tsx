
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue6Page() {
  completeClue(5);
  
  return <ClueComponent clueNumber={6} progressPercentage={60} />;
}
