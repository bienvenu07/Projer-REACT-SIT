
import TweetActions from "./TweetActions"
import TweetBody from "./TweetBody"

export default function TweetContent(props){
    return (<div className="tweet-content"> 
    
     <TweetBody body={props.content.body}/>
     <TweetActions actions={props.content.actions}/>
    </div>)
}