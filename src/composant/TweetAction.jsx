
export default function TweetAction(props){
    console.log(props.icon);
    return (<div className="tweet-action"> 
    <img src={props.icon} alt="" />
    <p>{props.Reply}</p>
    </div>)
}