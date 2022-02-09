import { useState } from "react";
import TopicList from "./TopicList";
import TopicBar from "./TopicBar";
import SideBar from "../Bar/SideBar";
import { Link } from "react-router-dom";
import NavBar from '../Bar/NavBar';


const Home = () => {
  const [list] = useState([
    { Rank: '1st', body0: 'Chapter 2: Algebra Practice', body1:'Skill Sharpness Math', body2:'35 questions', id: 1 },
    { Rank: '2nd', body0: 'Geometry Module Test', body1:'Intensive Mathematics Practice', body2:'35 questions',id: 2 },
    { Rank: '3rd', body0: 'Problem solving Pratice', body1:'Intensive Mathematics Practice', body2:'35 questions', id: 3 },
    { Rank: '3rd', body0: 'Problem solving Practice', body1:'Intensive Mathematics Pratice', body2:'35 questions', id: 4 }
  ])

  return (
    <div>
      <SideBar/>
      <NavBar/>
      <TopicBar />
      <div className="home"><Link to="/Expandedqns"><TopicList list={list}/></Link></div>
    </div>
  );
}
 
export default Home;