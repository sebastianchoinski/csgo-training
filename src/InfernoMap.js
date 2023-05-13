import React from 'react'
import InfernoImg from './infernoMap.png'
import { useState, useEffect} from "react";
import maps from './maps.json';
export default function InfernoMap() {
    const maps = {
      "inferno":{
          "mapname": "Inferno",
          "places":{
              "t-spawn":{
                  "name": "T Spawn",
                  "id": "t-spawn",
                  "x": "95",
                  "y": "650"
              },
              "t-ramp":{
                  "name": "T Ramp",
                  "id": "t-ramp",
                  "x": "335",
                  "y": "600"
              },
              "bridge":{
                  "name": "Bridge",
                  "id": "bridge",
                  "x": "305",
                  "y": "765"
              },
              "t-aparts":{
                  "name": "T Apartments",
                  "id": "t-aparts",
                  "x": "370",
                  "y": "820"
              },
              "t-balcony":{
                  "name": "T Balcony",
                  "id": "t-balcony",
                  "x": "380",
                  "y": "720"
              },
              "second-mid":{
                  "name": "Second Mid",
                  "id": "second-mid",
                  "x": "420",
                  "y": "760"
              },
              "banana-car":{
                  "name": "Banana Car",
                  "id": "banana-car",
                  "x": "440",
                  "y": "390"
              },
              "banana":{
                  "name": "Banana",
                  "id": "banana",
                  "x": "410",
                  "y": "445"
              },
              "mid":{
                  "name": "Mid",
                  "id": "mid",
                  "x": "515",
                  "y": "650"
              },
              "underpass":{
                  "name": "Underpass",
                  "id": "underpass",
                  "x": "405",
                  "y": "690"
              },
              "banana-logs":{
                  "name": "Logs",
                  "id": "banana-logs",
                  "x": "362",
                  "y": "505"
              },
              "banana-sandbags":{
                  "name": "Banana Sandbags",
                  "id": "banana-sandbags",
                  "x": "495",
                  "y": "415"
              },
              "basket":{
                  "name": "Basket",
                  "id": "basket",
                  "x": "505",
                  "y": "385"
              },
              "fountain":{
                  "name": "Fountain",
                  "id": "fountain",
                  "x": "430",
                  "y": "265"
              },
              "dark-spot":{
                  "name": "Dark Spot",
                  "id": "dark-spot",
                  "x": "370",
                  "y": "195"
              },
              "3rd":{
                  "name": "3rd",
                  "id": "3rd",
                  "x": "394",
                  "y": "298"
              },
              "2nd":{
                  "name": "2nd",
                  "id": "2nd",
                  "x": "410",
                  "y": "320"
              },
              "1st":{
                  "name": "1st",
                  "id": "1st",
                  "x": "465",
                  "y": "315"
              },
              "spools":{
                  "name": "Spools",
                  "id": "Spools",
                  "x": "460",
                  "y": "200"
              },
              "garden":{
                  "name": "Garden",
                  "id": "garden",
                  "x": "500",
                  "y": "130"
              },
              "construction":{
                  "name": "Construction",
                  "id": "construction",
                  "x": "540",
                  "y": "200"
              },
              "sandbags":{
                  "name": "Sandbags",
                  "id": "sandbags",
                  "x": "495",
                  "y": "200"
              },
              "grill":{
                  "name": "Grill",
                  "id": "grill",
                  "x": "495",
                  "y": "240"
              },
              "truck":{
                  "name": "Truck",
                  "id": "truck",
                  "x": "610",
                  "y": "240"
              },
              "tree":{
                  "name": "Tree",
                  "id": "tree",
                  "x": "570",
                  "y": "285"
              },
              "speedway":{
                  "name": "Speedway",
                  "id": "speedway",
                  "x": "635",
                  "y": "375"
              },
              "well":{
                  "name": "Well",
                  "id": "well",
                  "x": "710",
                  "y": "295"
              },
              "terrace":{
                  "name": "Terrace",
                  "id": "terrace",
                  "x": "700",
                  "y": "345"
              },
              "ct-spawn":{
                  "name": "CT Spawn",
                  "id": "ct-spawn",
                  "x": "785",
                  "y": "370"
              },
              "library":{
                  "name": "Library",
                  "id": "library",
                  "x": "815",
                  "y": "540"
              },
              "arch":{
                  "name": "Arch",
                  "id": "arch",
                  "x": "680",
                  "y": "500"
              },
              "cubby":{
                  "name": "Cubby",
                  "id": "gcubby",
                  "x": "600",
                  "y": "540"
              },
              "arch-side":{
                  "name": "Arch Side",
                  "id": "arch-side",
                  "x": "692",
                  "y": "553"
              },
              "close":{
                  "name": "Close",
                  "id": "close",
                  "x": "602",
                  "y": "624"
              },
              "haystack":{
                  "name": "Haystack",
                  "id": "haystack",
                  "x": "528",
                  "y": "751"
              },
              "squeaky":{
                  "name": "Squeaky",
                  "id": "squeaky",
                  "x": "425",
                  "y": "825"
              },
              "stairs":{
                  "name": "Stairs",
                  "id": "stairs",
                  "x": "560",
                  "y": "850"
              },
              "long-hall":{
                  "name": "Long Hall",
                  "id": "long-hall",
                  "x": "640",
                  "y": "800"
              },
              "patio":{
                  "name": "Patio",
                  "id": "patio",
                  "x": "617",
                  "y": "750"
              },
              "aparts":{
                  "name": "Apartments",
                  "id": "aparts",
                  "x": "580",
                  "y": "765"
              },
              "window":{
                  "name": "Window",
                  "id": "window",
                  "x": "550",
                  "y": "765"
              },
              "boiler":{
                  "name": "Boiler",
                  "id": "boiler",
                  "x": "580",
                  "y": "685"
              },
              "graveyard":{
                  "name": "Graveyard",
                  "id": "graveyard",
                  "x": "800",
                  "y": "690"
              },
              "pit":{
                  "name": "PIT",
                  "id": "pit",
                  "x": "770",
                  "y": "790"
              },
              "balcony":{
                  "name": "Balcony",
                  "id": "balcony",
                  "x": "727",
                  "y": "784"
              },
              "truck-side":{
                  "name": "Truck Side",
                  "id": "truck-side",
                  "x": "686",
                  "y": "735"
              },
              "a-boost":{
                  "name": "A Boost",
                  "id": "a-boost",
                  "x": "687",
                  "y": "703"
              },
              "bombsite-a":{
                  "name": "Bombsite A",
                  "id": "bombsite-a",
                  "x": "710",
                  "y": "672"
              },
              "bombsite-b":{
                  "name": "Bombsite B",
                  "id": "bombsite-b",
                  "x": "437",
                  "y": "279"
              }
  
          }
      }
  };
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

  
  return (
    <div><p>Relative: ({localCoords.x}, {localCoords.y})</p>
    <img src={InfernoImg} onClick={handleMouseMove}></img>
    <p>{JSON.stringify(maps)}</p>
    <p>{Object.keys(maps).map((key) => (
      <p>{key}</p>
    ))
    }</p>
        </div>
  )
}
