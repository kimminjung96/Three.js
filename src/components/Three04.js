import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  const boxRef = useRef();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (hover) {
      //true 이면
      boxRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={boxRef}>
      <mesh
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
        onClick={() => {
          setActive(!active);
        }}
      >
        <dodecahedronGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={active ? `green` : `red`} />
      </mesh>
    </group>
  );
};

const Three04 = () => {
  return (
    <div>
      <Canvas style={{ height: 400, width: 400 }} camera={{ fov: 55, position: [0, 2, 2] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} />
        {/* pointLight 집중조명 */}
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default Three04;
