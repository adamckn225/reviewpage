import ShortedSideBar from "../Bar/ShortedSideBar";
import NavBar from '../Bar/NavBar';
import { Link } from "react-router-dom";

const Expandedqns = () => {
    return ( 
        <div>
            <ShortedSideBar />
            <NavBar/>
        <div className="navbar">
            <div className="mostrecentbar0">Date</div>
            <div className="mostrecentbar1">Question</div>
            <div className="mostrecentbar2">Minimise all questions</div>
        </div>
        <div className="table0"></div>
            <div className="table0text0">
                <div>Sep</div>
                <div>1</div>
            </div>
                    <div className="table0text1">Question 2*</div>
                    <div className="table0text2">Which of the following is correct? (4 marks)</div>
                    <div className="table0logo0"></div>
                    <div className="table0logo1"></div>

                    <div className="table0pic0"></div>
                    <div className="table0pic1"></div>
                    <div className="table0line"></div>
                    <div className="table0text3">Result</div>
                    <div className="table0text4">Q12.</div>
                    <div className="table0text5">Question type: <br/> Crtitical thinking</div>
 
                    <div className="table0box0"></div>
                    <div className="table0box0pic0"></div>
                    <div className="table0box0text0">A.</div>
                    <div className="table0box0text1">is heavier than</div>
                    <div className="table0box0pic1"></div>
                   
                    <div className="table0box1"></div>
                    <div className="table0box1pic0"></div>
                    <div className="table0box1text0">B.</div>
                    <div className="table0box1text1">is heavier than</div>
                    <div className="table0box1pic1"></div>

                    <div className="table0box2"></div>
                    <div className="table0box2pic0"></div>
                    <div className="table0box2text0">C.</div>
                    <div className="table0box2text1">is lighter than</div>
                    <div className="table0box2pic1"></div>

                    <div className="table0box3"></div>
                    <div className="table0box3pic0"></div>
                    <div className="table0box3text0">D.</div>
                    <div className="table0box3text1">is heavier than</div>
                    <div className="table0box3pic1"></div>

                    <div className="table0box4"></div>
                    <div className="table0box4text0">E.</div>
                    <div className="table0box4text1">I am not sure</div>
 
                    <div className="table0hole0"></div>
                    <div className="table0hole1"></div>
                    <div className="table0hole2"></div>
                    <div className="table0hole3"></div>
                    <div className="table0rope0"></div>
                    <div className="table0rope1"></div>

                    <div className="blackboard0"></div>
                    <div className="blackboard1"></div>
                    <div className="blackboardtext0">Correct answer: D</div>
                    <div className="note0"></div>
                    <div className="note0pic0"></div>
                    <div className="note0text0">Notes</div>
                    <div className="note0text1">Correct answer: D</div>

                    <div className="table1"></div>
                    <div className="table1pic0"></div>
                    <div className="table1pic1"></div>

                    <div className="table1box0"></div>
                    <div className="table1box0text0">A.</div>
                    <div className="table1box0text1">is heavier than</div>

                    <div className="table1box1"></div>
                    <div className="table1box1text0">B.</div>
                    <div className="table1box1text1">is heavier than</div>
                    
                    <div className="table1box2"></div>
                    <div className="table1box2text0">C.</div>
                    <div className="table1box2text1">is ligher than</div>

                    <div className="table1box3"></div>
                    <div className="table1box3text0">D.</div>
                    <div className="table1box3text1">is ligher than</div>

                    <div className="table1box4"></div>
                    <div className="table1box4text0">E.</div>
                    <div className="table1box4text1">I am not sure</div>
                    <div className="button5box"></div>
                    <div className="button5">Yes, I understand</div>
                    <button className="button6"><Link to="/Practisesimilar">Practise similar questions</Link></button>
                    
                    <div className="blackboard2"></div>
                    <div className="blackboard3"></div>
                    <div className="note1"></div>
    </div>
     );
}
 
export default Expandedqns;