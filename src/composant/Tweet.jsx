
import TweetAvatar from "./TweetAvatar";
import TweetContent from "./TweetContent";

export default function Tweet(props){
    return (<div className="tweet"> 
            <TweetAvatar img={props.table.avatar}/>
            <TweetContent content={props.table.content}/>
     
    
    </div>)
}