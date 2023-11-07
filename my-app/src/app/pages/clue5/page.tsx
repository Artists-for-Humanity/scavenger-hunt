
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue5Page() {
  completeClue(4);
  
  return <ClueComponent clueNumber={5} progressPercentage={50} />;
}
