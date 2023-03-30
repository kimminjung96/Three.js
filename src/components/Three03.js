import { useRef, Suspense } from "react";
/* use(HOOK)가 안붙은건 class형에도 사용이 가능하다. Suspense는 리엑트의 비동기에 사용된다. */
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Html, OrbitControls, useProgress } from "@react-three/drei";
/* Environment 환경설정 , OrbitControls 마우스컨트롤 조절 Html,useProgress를 사용해서 묘둘이 불러올때 까지 화면에 다른걸 보여줌 */
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/* 3D 그래픽이 로더될때 까지 로더중을 표시 */
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % 로딩완료</Html>;
}

const Model = () => {
  //const gltf = Three.js를 react에서 사용하게 변경(Three.js,"파일경로");
  const gltf = useLoader(GLTFLoader, "./rooster/scene.gltf");
  return <primitive object={gltf.scene} scale={2} rotation={[1, 1, 1]} position={[0, 0, 0.2]} />;
};

const Three03 = () => {
  const hadleCamera = (prop) => {
    console.log("hadleCamera", prop);
  };
  return (
    <div>
      <Canvas style={{ height: "500px" }} onCreated={hadleCamera} camera={{ position: [2, 2, 0.5], fov: 90, near: 0.1, far: 100 }}>
        <Suspense fallback={<Loader />}>
          <Model />
          <Environment preset="sunset" background blur={0.5} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Three03;
