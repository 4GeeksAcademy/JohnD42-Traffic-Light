import React from 'react'

const LightCycleButton = () => {

    let currentLight = 'green'
    const cycleLights = () => {
        toggleLight()
    }
    const toggleLight = () => {
        if (currentLight === 'red') {
            document.querySelector('#red-light').classList.remove('selected')
            document.querySelector('#yellow-light').classList.add('selected')
            currentLight = 'yellow'
        }
        else if (currentLight === 'yellow') {
            document.querySelector('#yellow-light').classList.remove('selected')
            document.querySelector('#green-light').classList.add('selected')
            currentLight = 'green'
        }
        else if (currentLight === 'green') {
            document.querySelector('#green-light').classList.remove('selected')
            document.querySelector('#red-light').classList.add('selected')
            currentLight = 'red'
        }
    }

    return (
        <button className='btn bg-black mt-5 mx-auto text-white' onClick={() => setInterval(cycleLights, 3000)}>
            Cycle lights!
        </button>
    )
}

export default LightCycleButton