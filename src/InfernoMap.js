import React from 'react'
import InfernoImg from './infernoMap.png'
import { useState, useEffect} from "react";
import { data } from './data.js';
import InfernoQuiz from './InfernoQuiz';
export default function InfernoMap() {

    const [localCoords, setLocalCoords] = useState({x: 0, y: 0});
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
    const [randomPlace, setRandomPlace] = useState()
    
    
    const getRandomPlace = () => {
      let places = data.find(x => x.id === 'inferno').places;
      var randomplace = places[Math.floor(Math.random()*places.length)];
      setRandomPlace(randomplace)
    }
    
    const handleMouseMove = event => {
        setLocalCoords({
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop,
        });
      };
      useEffect(() => {
        const handleGlobalMouseMove = event => {
          setGlobalCoords({
            x: event.clientX,
            y: event.clientY,
          });
        };
        window.addEventListener('mousemove', handleGlobalMouseMove);
        return () => {
          window.removeEventListener(
            'mousemove',
            handleGlobalMouseMove,
          );
        };
      }, []);

  const pointDistance = (Xa, Ya, Xb, Yb) => {
    let distance = Math.sqrt( (Math.pow(Xb-Xa, 2))+  (Math.pow(Yb-Ya, 2)))
    return Math.ceil(distance);
  }
  const get10Questions = () => {
    
    let places = data.find(x => x.id === 'inferno').places;
    let random10questions = []
    for(let i=0; i<11; i++){
      random10questions.push(randomPlace)
      setRandomPlace(getRandomPlace())
    }
    console.log(random10questions)
  }
   

  

  return (
    
    <div>
    <button onClick={() => get10Questions()}></button>  
    <p>Relative: ({localCoords.x}, {localCoords.y})</p>
    <img src={InfernoImg} onClick={handleMouseMove}></img>
    <p>{JSON.stringify(randomPlace)}</p>
    <p>SSS</p>
    
    <p>X</p>
    <InfernoQuiz data={data} clickCoords={localCoords}/>
    <p>------------------</p>
    {
        data.map((data) => (
            data.places.map((place) => (
                <div>
                    <p>Name: {place.name}</p>
                    <p>X: {place.x}</p>
                    <p>Y: {place.y}</p>
                    <p>Distance: {pointDistance(Number(place.x), Number(place.y), Number(localCoords.x), Number(localCoords.y))}</p>
                </div>
            ))
        ))

    }

        </div>
  )
}
