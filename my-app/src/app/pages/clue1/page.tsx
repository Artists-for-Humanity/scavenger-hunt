
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue1Page() {
  completeClue(1);
  
  return <ClueComponent clueNumber={1} progressPercentage={10} />;
}
