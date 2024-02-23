import TweetTitleAuthor from "./TweetTitleAuthor"
import TweetTitleDetails from "./TweetTitleDetails"

export default function TweetTitle(props){
    return (
    <div className="tweet-title"> 
    <TweetTitleAuthor author={props.title.author}/>
    <img src ="src/assets/icon/iconblanc/Verified.svg"/>
    <TweetTitleDetails detail={props.title.detail}/>
    <TweetTitleDetails detail="."/>
    <TweetTitleDetails detail={props.title.time} />

    
    </div>)
}