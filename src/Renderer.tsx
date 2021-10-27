import React, { useRef, useFrame } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import ExampleBox from "./Objects/ExampleBox";

const Renderer = (jsonValue: string) => {
  console.log(jsonValue);

  return (
    <React.Fragment>
      <Canvas
        style={{
          height: 1024,
          width: 1024,
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.25} />
        <pointLight intensity={0.75} position={[500, 500, 1000]} />

        {/* Creates a 200x200 with 20 segments */}
        <gridHelper args={[200, 20]} />

        {/* EXAMPLE of a box on our plane */}
        <ExampleBox position={[0, 5, 0]} />
        <ExampleBox position={[0, 5, 0]} />

        {/* Our Controls. Allows us to drag the view and pan around. Try holding down Shift when dragging. */}
        <OrbitControls />

        {/* Our Camera. Feel free to experiment (or change out to a PerspectiveCamera 👀?) */}
        <OrthographicCamera
          makeDefault
          zoom={1}
          top={200}
          bottom={-200}
          left={200}
          right={-200}
          near={1}
          far={20000}
          position={[0, 200, 0]}
        />
      </Canvas>
    </React.Fragment>
  );
};

export default Renderer;
