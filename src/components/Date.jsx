import React, {useState} from "react";

function App(){

  setInterval(updateTime, 1000);

  const now = new Date().toDateString();

  const [date, setDate] = useState(now);

  function updateTime(){
    const newDate = new Date().toDateString();
    setDate(newDate);
  }


  return(
    <div className="container-date">
      <h1>{date}</h1>
      <button onClick={updateTime}>Get Date</button>
    </div>
  );
}

export default App;