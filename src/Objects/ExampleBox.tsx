import { useRef } from "react";

// Example 3D Object 10x10x10 box
const ExampleBox = (props: any) => {
  const boxRef = useRef();

  return (
    // (Almost) all Three elements consist of meshes.
    // A mesh basically combines three things -
    // a geometry (the 3D object shape), a material (the
    // object's texture) and a position.
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial attach="material" color={"red"} />
    </mesh>
  );
};

export default ExampleBox;
