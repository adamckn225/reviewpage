const TopicList = ({ list}) => {
    return (
      <div className="featured">
        {list.map(list => (
            <div className="featuredbox" key={list.id} >
            <div className="topiclistrank">{ list.Rank }</div>
            <div className="topiclisttopic0">{ list.body0 }</div>
            <div className="topiclisttopic1">{ list.body1 }</div>
            <div className="topiclisttopic2">{ list.body2 }</div>
          </div>
        ))}
      </div>
    );
  }
   
  export default TopicList;