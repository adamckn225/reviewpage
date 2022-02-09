import { useState } from "react";
import NavBar from '../Bar/NavBar';
import MostrecentList from "./MostrecentList";
import MostrecentBar from "./MostrecentBar";
import SideBar from "../Bar/SideBar";
import { Link } from "react-router-dom";


const Mostrecent = () => {
    const [list] = useState([
      { date: 'Sep 1', body0: '', body1:'How many apples were there? XXXXXXXXXX YYYYYYYYY', id: 1 },
      { date: 'Aug 29', body0: '', body1:'How many apples were there? XXXXXXXXXX YYYYYYYYY', id: 2 },
      { date: 'Aug 29', body0: '', body1:'How many apples were there? XXXXXXXXXX YYYYYYYYY', id: 3 },
      { date: 'Aug 29', body0: '', body1:'How many apples were there? XXXXXXXXXX YYYYYYYYY', id: 4 }
      ])
    
    return ( 
        <div>
        <SideBar/>
        <NavBar />
        <div className="home"><Link to="/Expandedqns"><MostrecentList list={list}/></Link></div>
        <MostrecentBar/>
        </div>
     );
}
 
export default Mostrecent;