import { Link } from "react-router-dom";

const ShortedSidebar = () => {
    return ( 
        <div>
        <div className="shortedsidebarbg"></div>
        <ul>
            <li className="ShortedsidebarList0"><Link to="/Mostrecent"></Link></li>
            <li className="ShortedsidebarList1"><Link to="/"></Link></li>
            <li className="ShortedsidebarList2"><Link to="/"></Link></li>
            <li className="ShortedsidebarList3"><Link to="/"></Link></li>
            <li className="ShortedsidebarList4"><Link to="/"></Link></li>
        </ul>

        <div className="Ellipse"></div>
        <div className="ellipsepic0"></div>
        <div className="ellipsepic1"></div>
        <div className="ellipseword"><Link to="/"></Link></div>
    </div>
     );
}
 
export default ShortedSidebar;
