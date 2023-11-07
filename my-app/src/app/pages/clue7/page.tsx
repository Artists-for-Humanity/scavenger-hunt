
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue7Page() {
  completeClue(6);
  
  return <ClueComponent clueNumber={7} progressPercentage={70} />;
}
