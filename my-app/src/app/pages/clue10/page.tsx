
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue10Page() {
  completeClue(9);
  
  return <ClueComponent clueNumber={10} progressPercentage={100} />;
}
