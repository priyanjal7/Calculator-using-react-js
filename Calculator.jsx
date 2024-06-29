import React, { useState } from 'react'

const Calculator = () => {
    let btndata = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=','AC']
    const [display, setdisplay] = useState("0")

    function handleClick(e) {
        if(display==="0") return setdisplay(()=>e.target.value)
        else setdisplay(()=>display+e.target.value)
        if(e.target.value === "="){
            setdisplay(eval(display))

        }
        if(e.target.value === 'AC'){
            setdisplay(function(){
                return "0"
            })
        }
    }
  return (
    <div className='w-[350px] h-[500px] bg-zinc-700 rounded-lg overflow-hidden '>
        <div className='text-4xl text-white flex items-end justify-end pr-4 pb-2 w-[80%] h-[30%] border-2 border-white relative left-[10%] top-[4%]'>
            {display}
        </div>
        <div className='pt-4 mt-6 w-[80%] h-[64%] flex justify-between flex-wrap gap-6 relative left-[10%]'>
            {btndata.map((item,index)=>{
                return <button key={index} onClick={handleClick} value={item} className='w-[50px] h-[50px] bg-orange-600'>{item}</button>
            })}
        </div>
    </div>
  )
}

export default Calculator