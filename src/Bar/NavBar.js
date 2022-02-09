import { Link } from 'react-router-dom';
import useCollapse from 'react-collapsed';

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="Collapsible">
      <div className='button4'>
        <button className="addfilter" {...getToggleProps()}>
            {isExpanded ? 'Add filter' : 'Add filter'}
        </button>
        <div {...getCollapseProps()}>
            <div className="addfiltercontent">
              Ascending order (Difficulty level) <br/><br/>
              Descending order (Difficulty level)
            </div>
        </div>
      </div>
      <button className="difficulty" {...getToggleProps()}>
          {isExpanded ? 'Difficulty' : 'Difficulty'}
      </button>
      <div {...getCollapseProps()}>
          <div className="difficultycontent">
              Level 1<br/><br/>
              Level 2<br/><br/>
              Level 3<br/><br/>
              Level 3+
          </div>
      </div>
  </div>
  );
}

const NavBar = () => {
    return ( 
      <div className="navbar">
        <Collapsible/>
        <div className='review'>Review</div>
        <div className="topic"><Link to="/">Topic</Link></div>
        <div className='mostrecent'><Link to="/Mostrecent">Most recent</Link></div>
        <input type="text" className="searchingbar" placeholder="Search by Question, Date, ..." />
        <button className='button0'>Search</button>

            <button className='button1'>Date</button>
            <button className='button3'>Question Topic</button>
      </div>
    );
}
 
export default NavBar;