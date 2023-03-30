import { Canvas } from "@react-three/fiber";

const Three01 =()=>{
    return(
        <div>
             {/* # 3. 공식문서- 상수.Materials */}
            <Canvas>
                {/* ambientLight:태양광효과 /intensity:강도 */}
                <ambientLight intensity={0.1}></ambientLight>
                {/* position: 조명위치 */}
                <directionalLight color='red' position={[0,0,5]}></directionalLight>
                <mesh>
                    <boxGeometry></boxGeometry>
                    <meshStandardMaterial></meshStandardMaterial>
                </mesh>
            </Canvas>
        </div>
    )
}

export default Three01;