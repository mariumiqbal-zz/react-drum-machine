import React from "react"
import DrumPad from "./DrumPad"

const PadBank = (props) => {
     let padBank = props.currentPad.map(item=>{
        return (
            <DrumPad key={item.id}
            clipUrl={item.url}
            clipId={item.id}
            keyCode={item.keyCode}
            keyTrigger={item.keyTrigger}
            power={props.power}
            />
        )
    })

    return(
    <div className="pad-bank"> {padBank}</div>
    )
}

export default PadBank