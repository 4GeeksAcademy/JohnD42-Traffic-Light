import React from 'react'
import { useState } from 'react'

const TrafficLight = () => {
    const [color, setColor] = useState('');

    const clickHandler = (e) => {
        if(e.target.id === 'red-light') {
            setColor('red')
        }
        if(e.target.id === 'yellow-light') {
            setColor('yellow')
        }
        if(e.target.id === 'green-light') {
            setColor('green')
        }
    }

    return (
        <div class="row mx-auto">
            <div class="col-2 mx-auto">
                <div class="col-1 mx-auto bg-black" id="traffic-top">
                    `|
                     |
                     |
                     |
                    `
                </div>
                <div class='col-12 mx-auto bg-black rounded-top rounded-bottom'>
                    <div class={`p-5 col-6 rounded-circle mx-auto light-body h-100 w-100 ${color === 'red' ? 'selected' : ''}`}>
                         
                        <div class="light rounded-circle mx-auto">
                            <button id="red-light" class="h-100 w-100 rounded-circle" onClick={e => clickHandler(e)}>
                            </button>
                        </div>
                    </div>
                    <div class={`p-5 col-6 rounded-circle mx-auto bg-black light-body h-100 w-100 ${color === 'yellow' ? 'selected' : ''}`}>
                         
                        <div class="light rounded-circle mx-auto">
                            <button id="yellow-light" class="h-100 w-100 rounded-circle" onClick={e => clickHandler(e)}>
                            </button>
                        </div>
                    </div>
                    <div class={`p-5 rounded-circle col-6 mx-auto bg-black light-body h-100 w-100 ${color === 'green' ? 'selected' : ''}`}>
                         
                        <div class="rounded-circle mx-auto light">
                            <button id="green-light" class="h-100 w-100 rounded-circle green-light" onClick={e => clickHandler(e)}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight