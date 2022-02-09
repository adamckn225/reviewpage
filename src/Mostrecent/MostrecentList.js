const MostrecentList = ({ list, title0, title1}) => {
    return (
      <div className="featured">
        {list.map(list => (
          <div className="featuredbox" key={list.id} >
            <div className="mostrecentlistdate">{ list.date }</div>
            <div className="mostrecentlisttopic0">{ list.body0 }</div>
            <div className="mostrecentlisttopic1">{ list.body1 }</div>
          </div>
        ))}
      </div>
    );
  }
   
  export default MostrecentList;