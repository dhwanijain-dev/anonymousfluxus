import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, GradientTexture, OrbitControls, SoftShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingModel({ modelPath, position, scale,rotation }) {
    const model = useLoader(GLTFLoader, modelPath);
    const ref = useRef();

    // useFrame(({ clock }) => {
    //     const t = clock.getElapsedTime();
    //     ref.current.rotation.y = Math.sin(t * 0.5) * 0.8; // Smooth rotation
    //     ref.current.position.y = position[1] + Math.sin(t) * 0.2; // Floating effect
    // });

    return <primitive ref={ref} object={model.scene} position={position} scale={scale} rotation={rotation} />;
}

function Scene() {
    const materialRef = useRef();

    // Define uniforms only once
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
    }), []);

    // Animate the time uniform on every frame
    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
        }
    });

    return (
        <>
            <SoftShadows size={25} samples={20} /> {/* ✅ Soft shadows for realism */}
            <Float intensity={0.5} distance={0.5} speed={2}>
            <FloatingModel modelPath="./Heart.glb" position={[2.5, 0.6, -0.5]} scale={0.06} rotation={[0, 0, 0]} />
            </Float>
            <Float intensity={0.5} distance={0.5} speed={2}>

            <FloatingModel modelPath="./Health.glb" position={[-4, -1.2, 0]} scale={5} rotation={[0, 0, 0]}/>
            </Float>
            <Float intensity={0.5} distance={0.5} speed={2}>

            <FloatingModel modelPath="./Syringe.glb" position={[2, -1.8, 0]} scale={1.8} rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}/>
            </Float>

            
            <Environment preset="city" />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} />

            {/* <DynamicGradientPlane /> */}
            <mesh position={[0, 0, -3]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial >
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


export default function CanvasBackground() {
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
            camera={{ position: [0, 0, 6], fov: 60 }}
        >
            <Scene />
        </Canvas>
    );
}
