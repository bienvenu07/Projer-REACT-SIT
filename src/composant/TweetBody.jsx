
import TweetImage from "./TweetImage"
import TweetText from "./TweetText"
import TweetTitle from "./TweetTitle"

export default function TweetBody(props){
    return ( <div className="tweet-body"> 
    <TweetTitle title={props.body.title} />
    <TweetText text={props.body.text} />
    <TweetImage img={props.body.image}/>
    

    </div>)
}