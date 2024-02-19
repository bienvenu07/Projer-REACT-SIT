
import './App.css'
import Timeline from "./composant/Timeline"
import Header from "./composant/Header"
import TweetEditor from './composant/TweetEditor'
import Tweets from './composant/Tweets'
import PageTitle from'./composant/PageTitle'
import Toptweets from './composant/Toptweets'

function App() {
  return (
    <>
    <Tweets/>
    <Timeline/>
    <Header/>
    <TweetEditor/>
    <PageTitle/>
    <Toptweets/>
    </>
   
  )
}

export default App
