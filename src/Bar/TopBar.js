import { Link } from "react-router-dom";

const TopBar = () => {
    return ( 
        <div className="practise">
            <div className="topbarbg"></div>
            <button className="topbarbutton0"><Link to="./">Back to the review page</Link></button>
            <button className="topbarbutton1">Save</button>
            <button className="topbarbutton2">Submit</button>
        </div>
     );
}
 
export default TopBar;