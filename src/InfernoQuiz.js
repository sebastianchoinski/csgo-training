import React from 'react'
import { useState, useEffect} from "react";

export default function InfernoQuiz(props) {
    const [randomPlace, setRandomPlace] = useState({"x": 0, "y": 0})
    const pointDistance = (Xa, Ya, Xb, Yb) => {
        let distance = Math.sqrt( (Math.pow(Xb-Xa, 2))+  (Math.pow(Yb-Ya, 2)))
        return Math.ceil(distance);
      }
    const [isDistanceOK, setIsDistanceOK] = useState("NIEOK")
    const getRandomPlace = () => {
        let places = props.data.find(x => x.id === 'inferno').places;
        var randomplace = places[Math.floor(Math.random()*places.length)];
        setRandomPlace(randomplace)
      }
      useEffect(() => {
        pointDistance(randomPlace.x, randomPlace.y, props.clickCoords.x, props.clickCoords.y) < 150 ? 
        setIsDistanceOK("OK"): 
        setIsDistanceOK("NIEOK")})
  return (
    <div>
        <p></p>
        <button onClick={() => getRandomPlace()}></button>
        <p>{JSON.stringify(randomPlace)}</p>
        <p>{isDistanceOK}</p>
    </div>
  )
}
