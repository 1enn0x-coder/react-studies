export default function PlayerScreen({player , dice})
{
     const DiceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return(
        
        <div>

        <div>
            
          <h3>Player {player}</h3>
          <div style={{ fontSize: "60px" }}>{DiceEmojis[dice - 1]}</div>
          <p>{dice}</p>
        </div> 


      </div> 
    )
}