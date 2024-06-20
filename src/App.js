import Button from "./components/button"
import Ayah from "./components/ayah"
import './App.css'
import React, { useState } from "react";



function App(){
  const [mood, setMood] = useState("")
  const [key,setKey] = useState(0);

  const handleClick = (text) => {
    console.log(text)
    setMood(text)
    setKey(Date.now());
  };
  
  return <div className="center">
  {!mood && (<h2>Choose any pill based on your mood</h2>)}

  
  <h2>{mood.toUpperCase()}</h2>
   {mood && (
        <div className="ayahDiv">
          <Ayah key={key} mood={mood} />
        </div>
      )}

    <div className="primaryCont">
    <Button onClick={() => handleClick('happy')} style={{ backgroundColor: 'green', color: 'white', border: 'none'}}>Happy</Button>
    <Button onClick={() => handleClick('sad')} style={{ backgroundColor: 'blue', color: 'white', border: 'none'}}>Sad</Button>
    <Button onClick={() => handleClick('anxious')} style={{ backgroundColor: 'orange', color: 'white', border: 'none'}} >Anxious</Button>
    <Button onClick={() => handleClick('thankful')} style={{ backgroundColor: 'yellow', color: 'white', border: 'none'}}>Thankful</Button>
    <Button onClick={() => handleClick('angry')} style={{ backgroundColor: 'red', color: 'white', border: 'none'}}>Angry</Button>
    <Button onClick={() => handleClick('lonely')} style={{ backgroundColor: 'grey', color: 'white', border: 'none'}}>Lonely</Button>
    </div>

  </div>
}

export default App