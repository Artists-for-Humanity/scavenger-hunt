
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue4Page() {
  completeClue(3);
  
  return <ClueComponent clueNumber={4} progressPercentage={40} />;
}
