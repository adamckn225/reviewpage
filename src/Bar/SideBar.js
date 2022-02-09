import { Link } from "react-router-dom";

const SideBar = () => {
    return ( 
        <div className="sidebar">
        <div className="Exampallogo"></div>
        <div className="sidebarbg"></div> 
        <div className='topRight'></div>
          <ul>
            <li className="sidebarList0"><Link to="/Mostrecent">Dashboard</Link></li>
            <li className="sidebarList1"><Link to="/">Result</Link></li>
            <li className="sidebarList2"><Link to="/">Review</Link></li>
            <li className="sidebarList3"><Link to="/">Saved Notes</Link></li>
            <li className="sidebarList4"><Link to="/">Account Settings</Link></li>
          </ul>
        <div className="Ellipse"></div>
        <div className="ellipsepic0"></div>
        <div className="ellipsepic1"></div>
        <div className="ellipseword"><Link to="/">Log out</Link></div>
        </div>
     );
}
 
export default SideBar;