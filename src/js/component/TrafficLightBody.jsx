import React from 'react'
import TrafficLight from './TrafficLight.jsx'

const TrafficLightBody = () => {
    
    return (
        <div className="row mx-auto">
            <div className="col-2 mx-auto">
                <div className="col-1 mx-auto bg-black" id="traffic-top">
                </div>
                <div className='mx-auto bg-black rounded-top rounded-bottom light-body p-2'>   
                    <TrafficLight lightColor="red"/>
                    <TrafficLight lightColor="yellow"/>
                    <TrafficLight lightColor="green"/>
                </div>
            </div>
        </div>
    )
}

export default TrafficLightBody