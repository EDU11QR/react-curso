import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

export function App(){
    return(
        <>
        <TwitterFollowCard userName = "midudev" name = "Miguel Angel Duran" />
        <TwitterFollowCard userName = "elonmusk" name = "Elon Musk" />
        </>
    )
}