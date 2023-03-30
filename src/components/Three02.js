import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimateBox = () => {
  /* useRef는 컴포넌트를 react화 시켜서 porps로 전달받을 수 있게 바꿔줌 */
  const ref = useRef();
  /* useFrame: fiber의 Hook */
  useFrame(({ clock }) => {
    //console.log(clock);
    /* elapsedTime 동작시간 */
    const a = clock.getElapsedTime();
    //console.log(a);
    ref.current.rotation.x = a;
    /* ref.current => 컴포넌트의 자기자신 */
  });

  /* 아래의 jsx와 fiber의 Hook의 통신이 필요함 */
  return (
    <mesh ref={ref}>
      {/* props이기 떄문에 배열로 받음 [2, 2, 2] x,y,z */}
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial color={"blue"}></meshPhongMaterial>
    </mesh>
  );
};

const Three02 = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1}></ambientLight>
        <directionalLight color="red" position={[0, 0, 5]}></directionalLight>
        <AnimateBox />
      </Canvas>
    </div>
  );
};
export default Three02;
