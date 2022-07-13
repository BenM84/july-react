import React, { useState } from "react";


function Time(){

const hour = new Date().getHours();

const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

    setInterval(updateTime, 1000);

const now = new Date().toLocaleTimeString();

const [time, setTime] = useState(now);

function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
}

    return(
        <div className="container-time">
        <h1>{time}</h1>
         <button onClick={updateTime}>Get Time</button>
        </div>
    );
}
export default Time;