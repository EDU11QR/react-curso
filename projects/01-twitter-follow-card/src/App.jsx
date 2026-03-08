import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

export function App(){

    return(
        <section className="App" >

        <TwitterFollowCard userName = "midudev">
            Miguel Angel Duran 
        </TwitterFollowCard>

        <TwitterFollowCard userName = "elonmusk">
            Elon Musk 
        </TwitterFollowCard>

        <TwitterFollowCard userName = "Mouredev">
            Brais Moure 
        </TwitterFollowCard>

        <TwitterFollowCard userName = "gneffa">
            Gustavo Neffa 
        </TwitterFollowCard>

        <TwitterFollowCard userName = "carmenansio">
            Carmen Ansio 
        </TwitterFollowCard>


        <TwitterFollowCard userName = "openclaw">
            OpenClaw
        </TwitterFollowCard>


        <TwitterFollowCard userName = "SoyDalto">
            Soy Dalto
        </TwitterFollowCard>



        </section>
    )
}