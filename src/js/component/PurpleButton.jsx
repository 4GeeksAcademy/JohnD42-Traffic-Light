import React from 'react'

const PurpleButton = (props) => {
    const togglePurple = props.togglePurple
    return (
        <button id="purpleBtn" className='btn bg-black mt-5 mx-auto text-white' onClick={() => togglePurple()} style= {{border: 'purple 1px solid'}}>
            Toggle purple!
        </button>
    )
}

export default PurpleButton