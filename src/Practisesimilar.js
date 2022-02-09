import ShortedSideBar from "./Bar/ShortedSideBar";
import TopBar from "./Bar/TopBar";
import { Link } from "react-router-dom";

const Practisesimilar = () => {
    return ( 
        <div>
            <TopBar/>
            <ShortedSideBar />
            <div className="practisetext0">Please read the quesetions and pick the best answer from the following options.</div>
            <div className="practisetext1">--End of Practice--</div>
            <div className="practisetext2">Question 1</div>
            <div className="practisetext3"></div>
            <div className="practisetext4">How many apples do you see? (3 marks)</div>
            <div className="practisetable0"></div>
            <div className="practisetable1"></div>
            <div className="practisetable2">A. 6</div>
            <div className="practisetable3">B. 3</div>
            <div className="practisetable4">C .4</div>
            <div className="practisetable5">D. 1</div>
            <div className="practisetable6">E. I am not sure</div>
            <div className="practisetext5">Question 2</div>
            <div className="practisetext6"></div>
            <div className="practisetext7">Which of the following is correct? (4 marks)</div>
            <div className="practisetable7"></div>
            <div className="practisetable8"></div>

                    <div className="practisebox0"></div>
                    <div className="practisebox0pic0"></div>
                    <div className="practisebox0text0">A.</div>
                    <div className="practisebox0text1">is heavier than</div>
                    <div className="practisebox0pic1"></div>
            
                    <div className="practisebox1"></div>
                    <div className="practisebox1pic0"></div>
                    <div className="practisebox1text0">B.</div>
                    <div className="practisebox1text1">is heavier than</div>
                    <div className="practisebox1pic1"></div>

                    <div className="practisebox2"></div>
                    <div className="practisebox2pic0"></div>
                    <div className="practisebox2text0">C.</div>
                    <div className="practisebox2text1">is lighter than</div>
                    <div className="practisebox2pic1"></div>

                    <div className="practisebox3"></div>
                    <div className="practisebox3pic0"></div>
                    <div className="practisebox3text0">D.</div>
                    <div className="practisebox3text1">is lighter than</div>
                    <div className="practisebox3pic1"></div>

                    <div className="practisebox4"></div>
                    <div className="practisebox4text0">E.</div>
                    <div className="practisebox4text1">I am not sure</div>

            <button className="practisebutton0"><Link to="./Expandedqns">Back to previous page </Link></button>

        </div>
     );
}
 
export default Practisesimilar;