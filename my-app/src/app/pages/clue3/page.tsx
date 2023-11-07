
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue3Page() {
  completeClue(2);
  
  return <ClueComponent clueNumber={3} progressPercentage={30} />;
}
