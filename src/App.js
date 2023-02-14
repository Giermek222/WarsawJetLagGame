import React, { useRef, useState } from "react";
import './App.css';
import dzielnice from './resources/dzielnice.png';
import fill from "./functions/fill";

function App() {

  const [districts, setDistricts] = useState([
    {name: "Białołęka", x:140, y:45, team:0},
    {name: "Bielany", x:100, y:145, team:0},
    {name: "Bemowo", x:60, y:250, team:0},
    {name: "Wola", x:140, y:345, team:0},
    {name: "Żoliboż", x:223, y:264, team:0},
    {name: "Śródmieście", x:243, y:320, team:0},
    {name: "Ochota", x:180, y:405, team:0},
    {name: "Włochy", x:140, y:450, team:0},
    {name: "Ursus", x:80, y:445, team:0},
    {name: "Mokotów", x:240, y:450, team:0},
    {name: "Ursynów", x:240, y:600, team:0},
    {name: "Wilanów", x:400, y:600, team:0},
    {name: "Targówek", x:323, y:264, team:0},
    {name: "Praga Pn", x:330, y:300, team:0},
    {name: "Praga Pd", x:400, y:300, team:0},
    {name: "Rembertów", x:500, y:300, team:0},
    {name: "Wawer", x:600, y:500, team:0},
    {name: "Wesoła", x:600, y:300, team:0}])

  const canvasRef = useRef(null);
  const showPicture = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = dzielnice;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let counter = 0; counter < 4 * canvas.width * canvas.height; counter = counter + 4) {
        if (data[counter] != 255) {
          data[counter] = 0;
          data[counter + 1] = 0;
          data[counter + 2] = 0;
          data[counter + 3] = 255;
        }
      }
      districts.map((district) => {
        fill(district.x, district.y, district.team, data, canvas.width);
      })
      
      ctx.putImageData(imageData, 0, 0);
    }
  }

  return (
    <div className="App">
      <canvas ref={canvasRef} onClick={(e) => {console.log(e.clientX); console.log(e.clientY)}} />
      <button onClick={showPicture}>banglar</button>
    </div>
  );
}

export default App;
