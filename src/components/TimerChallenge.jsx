import { useState, useRef} from "react";
import ResultModel from "./ResultModel";
export default function TimerChallenge({title,targetTime}){
    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000)
    const Timer = useRef();
    const dialog = useRef();

    const timeActive = timeRemaining>0 && timeRemaining<targetTime*1000;
    if(timeRemaining <=0 ){
        clearInterval( Timer.current);  
        dialog.current.open();
    }
    function Reseet(){
        setTimeRemaining(targetTime*1000);
    }
    function handleStart(){
        Timer.current = setInterval(()=>{
        setTimeRemaining(preTime => preTime-10)
        },10);
        
        setTimeStart(true);
    }
    
    function handleStop(){
        dialog.current.open();
        clearInterval( Timer.current);
    }
    return(
        <>
        <ResultModel Timer={targetTime}  ref={dialog} remainTime = {timeRemaining} Reset={Reseet}/>
        <section className="challenge">
            <h2>{title}</h2>
            {timeActive ? <p>You lost!</p> : null}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ''}
            </p>
            <p>
                <button onClick={timeActive ? handleStop : handleStart}>
                    {timeActive ? "Stop" : "Start"} Time
                </button>
            </p>
            <p className="{timeActive ? 'active':undefined}">
                {timeActive ? "Time is running..." : "Timer inactive"}
            </p>
        </section></>
    );
}