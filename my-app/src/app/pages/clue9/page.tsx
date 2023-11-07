
import ClueComponent from '../../components/ClueComponent'
import { completeClue } from '../../utils'

export default function Clue9Page() {
  completeClue(8);
  
  return <ClueComponent clueNumber={9} progressPercentage={90} />;
}
