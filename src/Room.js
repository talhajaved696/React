import React, { useState } from 'react'
import './room.css'



function Room() {

    let [isLit, setLit] = useState(true);
    let [temp, setTemp] = useState(72);
    let brightnes = isLit ? 'light' : 'dark';

    return (


        <body>
            <div className={'container'}>
                <h1>Room Light is {isLit ? 'ON' : 'OFF'}</h1>
                <br />
                <p>Press ON or OFF to Switch ON or OFF the Bulb.</p>
                <button class={"button"} onClick={() => { setLit(true) }}>ON</button>
                <button class={"button"} onClick={() => { setLit(false) }}>OFF</button>
                <div id={'circle'} className={`${brightnes}`}></div>
                <div id={'square'} className={`${brightnes}`}></div>
                <hr />
                <h2>Room Temperature</h2>
                <h4>{temp} F</h4>
                <button class={"button"} onClick={() => { setTemp(++temp) }}><strong>+</strong></button>
                <button class={"button"} onClick={() => { setTemp(--temp) }}><strong>-</strong></button>
            </div>
        </body>
    )
}

export default Room;