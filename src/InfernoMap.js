import React from 'react'
import InfernoImg from './infernoMap.png'
import { useState, useEffect} from "react";
import { data } from './data.js';
export default function InfernoMap() {

    const [localCoords, setLocalCoords] = useState({x: 0, y: 0});
    const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});

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
    let distance = Math.sqrt((Math.pow(Xb)-Math.pow(Xa)) + (Math.pow(Yb) - Math.pow(Ya)))
    return (distance);
  }

  return (
    <div><p>Relative: ({localCoords.x}, {localCoords.y})</p>
    <img src={InfernoImg} onClick={handleMouseMove}></img>

    <p>SSS</p>
    {
        data.map((data) => (
            data.places.map((place) => (
                <div>
                    <p>Name: {place.name}</p>
                    <p>X: {place.x}</p>
                    <p>Y: {place.y}</p>
                    <p>{typeof place.x}</p>
                    <p>{typeof place.y}</p>
                    <p>{typeof localCoords.x}</p>
                    <p>{typeof localCoords.y}</p>
                    <p>{typeof Number(place.x)}</p>
                    <p>{typeof Number(place.y)}</p>
                    <p>{Math.sqrt((Math.pow(Number(place.x))-Math.pow(Number(localCoords.x))) + (Math.pow(Number(place.y)) - Math.pow(Number(localCoords.y))))}</p>
                    <p>Distance: {pointDistance(Number(place.x), Number(place.y), Number(localCoords.x), Number(localCoords.y))}</p>
                </div>
            ))
        ))

    }

        </div>
  )
}
