import React, { useState } from "react";
import "./styles.css";
import Renderer from "./Renderer";
import JsonViewer from "./JsonViewer";

export default function App() {
  const [jsonValue, setJsonValue] = useState(
    JSON.stringify({
      roomBoundary: [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
        { x: 100, y: 100 },
        { x: 100, y: 100 }
      ],
      rooms: {
        "1": { id: 1, width: 500, height: 500, type: "workRoom" },
        "2": { id: 1, width: 500, height: 500, type: "workRoom" },
        "3": { id: 3, width: 500, height: 1000, type: "meetRoom" }
      }
    })
  );

  return (
    <div className="App">
      <h1>StartCode Hackathon 2021</h1>
      <JsonViewer jsonValue={jsonValue} setJsonValue={setJsonValue} />
      <Renderer jsonValue={jsonValue} />
    </div>
  );
}
