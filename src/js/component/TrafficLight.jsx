import React from 'react'
import { useState, useEffect } from 'react'

const TrafficLight = (props) => {
    const lightColor = props.lightColor;
    const clickHandler = props.changeSelectedLight;
    const lightCycler = props.lightCycler;

    return (
        <div id={`${lightColor}-light`} className={`light rounded-circle mx-auto ${props.selected === lightColor ? 'selected' : ''}`} onClick={e => clickHandler(e)}>
        </div>
    )
}

export default TrafficLight
