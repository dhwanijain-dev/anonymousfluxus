import { Environment, GradientTexture, GradientType, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";


import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as THREE from "three";

function Scene() {
    const hospital = useLoader(GLTFLoader, "./hospital.glb");
    const { camera } = useThree();

    // ...

    useFrame(() => {
        camera.lookAt(0, 0, 0);
    });
        
    return (
        <>
            <primitive object={hospital.scene} position={[0, 0, 0]} scale={0.1} />
            <mesh position={[0, -0.09, 0]} rotation={[-Math.PI / 2, 0, 0]}> 
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial  >
                    <GradientTexture
                        stops={[0, 1]} // As many stops as you want
                        colors={['white', 'cyan']} // Colors need to match the number of stops
                        size={1024} // Size is optional, default = 1024
                        
                    />
            
                </meshBasicMaterial>
                
            </mesh>
            
        </>
    );
}



export default function Hospital() {
    

    return (
        <Canvas
            shadows
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -2,
            }}
            camera={{ position: [4, 4, 3], fov: 60, }}
        >

            <Environment preset="city"/>
            <Scene />
            <OrbitControls/>
            {/* <color attach={background} args={[cyan]}/> */}
        </Canvas>
    );
}
