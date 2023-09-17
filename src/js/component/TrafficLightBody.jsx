import React, { useEffect, useState } from 'react'
import TrafficLight from './TrafficLight.jsx'
import LightCycleButton from './LightCycleButton.jsx'
import PurpleButton from './PurpleButton.jsx'

const TrafficLightBody = () => {
    const [purpleEnabled, setPurpleEnabled] = useState(false);
    const [selected, changeSelection] = useState('');
    const [cycling, setCycling] = useState(false);
    const [intervalID, setIntervalID] = useState('');

    const changeSelectedLight = (e) => {
        if(e.target.id === 'red-light') {
            changeSelection('red')
        }
        if(e.target.id === 'yellow-light') {
            changeSelection('yellow')
        }
        if(e.target.id === 'green-light') {
            changeSelection('green')
        }
        if(e.target.id === 'purple-light') {
            changeSelection('purple')
        }
    }

    const toggleLights = () => {
        console.log(selected)
        if (selected === 'purple') {
            changeSelection('red')
        }
        else if (selected === 'green' && purpleEnabled === true) {
            changeSelection('purple')
        }
        else if (selected === 'green') {
            changeSelection('red')
        }
        else if (selected === 'yellow') {
            changeSelection('green')
        }
        else if (selected === 'red') {
            changeSelection('yellow')
        }
        else {
            changeSelection('red')
        }
    }

    useEffect(() => {
        if(cycling === true) {
        setTimeout(() => toggleLights(),3000)
        }
    },[cycling,selected])

    const cycleLights = () => {
        if(cycling === false) {
            setCycling(true);
        }
        else {
            setCycling(false);
        }
    }

    const togglePurple = () => {
        if (purpleEnabled === false) {
            setPurpleEnabled(true)
        }
        else {
            setPurpleEnabled(false)
        }
    }

    return (
        <div className="row mx-auto">
            <div className="col-2 mx-auto">
                <div className="col-1 mx-auto bg-black" id="traffic-top">
                </div>
                <div className={`mx-auto bg-black rounded-top rounded-bottom p-2 ${purpleEnabled === true ? 'light-body-purp' : 'light-body-no-purp'}`}>   
                    <TrafficLight lightColor="red" selected={selected} changeSelectedLight={changeSelectedLight}/>
                    <TrafficLight lightColor="yellow" selected={selected} changeSelectedLight={changeSelectedLight}/>
                    <TrafficLight lightColor="green" selected={selected} changeSelectedLight={changeSelectedLight}/>
                    {purpleEnabled ? <TrafficLight lightColor="purple" selected={selected} changeSelectedLight={changeSelectedLight}/> : null}
                </div>
                <div className="row">
                    <div className="col-6">
                        <LightCycleButton selected={selected} cycleLights={cycleLights}/>
                    </div>
                    <div className="col-6">
                        <PurpleButton togglePurple={togglePurple}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLightBody