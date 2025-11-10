
import PlayerScreen from "./components/PlayerScreen"
import GameTitle from "./components/GameTitle"
export default function App() {
  return (
    <div
    style={{
         textAlign : "center",
         padding : "20px",
         margin : 0
          }}
    >
      
    <GameTitle player={2}></GameTitle>
    <PlayerScreen player={1} dice={1}> </PlayerScreen>
    <PlayerScreen player={2} dice={2}> </PlayerScreen>

    </div>
  
  )
}
