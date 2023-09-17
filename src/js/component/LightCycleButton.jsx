import React from 'react'

const LightCycleButton = (props) => {
    const selected = props.selected;
    const cycleLights = props.cycleLights;
    const cycling = props.cycling;
    const intervalID = props.intervalID;
    return (
        <button id="lcBtn" className='btn bg-black mt-5 mx-auto text-white' onClick={() => cycleLights(selected)} style= {{border: `${selected} 1px solid`}}>
            Cycle lights!
        </button>
    )
}

export default LightCycleButton