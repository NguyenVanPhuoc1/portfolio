import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Component để load mô hình 3D
const Model: React.FC = () => {
    const model = useGLTF("/desktop_pc/computer-desk-area/scene.gltf"); // Đặt file .glb vào thư mục /public/models

    return <primitive object={model.scene} scale={1.7} />;
};

// Component chính để hiển thị mô hình
const ThreeDScene: React.FC = () => {
    return (
        
        <Canvas camera={{ position: [2, 5, 3], fov: 40 }} >
            <Suspense fallback={null}>
                <ambientLight intensity={1.5} />  {/* Ánh sáng môi trường */}
                <directionalLight position={[10, 10, 10]} intensity={2} />
                <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={3} castShadow />
                <Model />
                <OrbitControls /> {/* Cho phép xoay mô hình */}
            </Suspense>
        </Canvas>
    );
};

export default ThreeDScene;
