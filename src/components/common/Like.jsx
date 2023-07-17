const Like = ({ liked, onHeartClick }) => {

    return (
        
        <i className= { liked ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden='true' onClick={onHeartClick} style={{cursor:'pointer'}} ></i>

     );
}
 
export default Like;