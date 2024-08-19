import { forwardRef } from 'react';
import { useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';
const ResultModel = forwardRef(function ResultModel({remainTime, Timer,Reset},ref){
    const dialog = useRef();
    const islost = remainTime<=0;
    const score = Math.round((1-remainTime/(Timer*1000))*100)
    const formatTime  = (remainTime/1000).toFixed(2);
       useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog className="result-modal" ref={dialog}>
            {islost ? <h2>You Lost!</h2>:<h2>Your Score: {score}</h2>}
            <p>The Target time was <strong>{Timer} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formatTime} second left.</strong></p>
            <form method="dialog" onSubmit={Reset}>
            <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})
export default ResultModel;