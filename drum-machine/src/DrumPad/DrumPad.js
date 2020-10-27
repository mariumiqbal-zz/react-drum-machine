import React,{useEffect} from "react"
import './../index.css';


const DrumPad=(props)=>{
      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.addEventListener("keydown",handleKeyPress);
  });

    const playSound= () => {
        if(props.power){
        const sound = document.getElementById(props.keyTrigger);
        sound.play();
        }
    }

    const handleKeyPress = (event) => {
        console.log(props.power)
         if(event.keyCode === props.keyCode){
          playSound();
        }
    }

    return(
        <div
        className='drum-pad'
        id={props.clipId}
        onClick={playSound}
        >
        <audio
          className='clip'
          id={props.keyTrigger}
          src={props.clipUrl}
        />
        {props.keyTrigger}
      </div>
    )
}

export default DrumPad
