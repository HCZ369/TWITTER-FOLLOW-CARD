import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
const App = () => {
     return(
          <div className="App">
               <TwitterFollowCard name="Paz Chiuzano" userName="pazchi" isFollowing={false}/>
               <TwitterFollowCard name="Emmita Carreras" userName="EmminCO" isFollowing={true}/>
               <TwitterFollowCard name="Albino" userName="ZarateJC" isFollowing={false}/>
               <TwitterFollowCard name="Albino Oyin" userName="OyE" isFollowing={true}/>
          </div>
     )
}
export default App