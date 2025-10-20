
export default function CounterButton({title , handleclick}) {
    return (
    <button 
    style={{
        margin : "5px"
    }}


      onClick={handleclick}
   >
    {title}
    </button>
    )
}

