import React from 'react'
import { useState, useEffect } from 'react'

const TrafficLight = (props) => {
    const lightColor = props.lightColor;
    const [selected, selectLight] = useState('');

    const clickHandler = (e) => {
        console.log()
        if(e.target.id === 'red-light') {
            selectLight('red')
            document.querySelector('#red-light').classList.add('selected')

            const yellowLight = document.querySelector('#yellow-light')
            const greenLight = document.querySelector('#green-light')

            yellowLight.classList.remove('selected')
            greenLight.classList.remove('selected')
        }
        if(e.target.id === 'yellow-light') {
            selectLight('yellow')
            document.querySelector('#yellow-light').classList.add('selected')

            const redLight = document.querySelector('#red-light')
            const greenLight = document.querySelector('#green-light')

            redLight.classList.remove('selected')
            greenLight.classList.remove('selected')
        }
        if(e.target.id === 'green-light') {
            selectLight('green')
            document.querySelector('#green-light').classList.add('selected')

            const yellowLight = document.querySelector('#yellow-light')
            const redLight = document.querySelector('#red-light')

            yellowLight.classList.remove('selected')
            redLight.classList.remove('selected')
        }
    }

    return (
        <div id={`${lightColor}-light`} className={`light rounded-circle mx-auto ${selected === lightColor ? 'selected' : ''}`} onClick={e => clickHandler(e)}>
        </div>
    )
}

export default TrafficLight
