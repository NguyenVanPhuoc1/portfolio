import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {  Group } from "three";
import gsap from "gsap";

const generateSpherePoints = (numParticles: number, radius: number) => {
    const points = [];
    for (let i = 0; i < numParticles; i++) {
        const phi = Math.acos(-1 + (2 * i) / numParticles); // Góc dọc
        const theta = Math.sqrt(numParticles * Math.PI) * phi; // Góc ngang

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        points.push([x, y, z]);
    }
    return points;
};

const ParticleSphere = ({ numParticles = 500, radius = 1 }) => {
const groupRef = useRef<Group | null>(null);
const points = generateSpherePoints(numParticles, radius);

useEffect(() => {
if (groupRef.current) {
    gsap.to(groupRef.current.rotation, {
    y: Math.PI * 2,
    duration: 8,
    repeat: -1,
    ease: "linear",
    });
}
}, []);

return (
<group ref={groupRef}>
    {points.map(([x, y, z], index) => (
    <mesh key={index} position={[x, y, z]}>
        {/* kích thước hạt */}
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial color="white" />
    </mesh>
    ))}
</group>
);
};

export default function LoadingSphere() {
    return (
        <div className="h-screen w-screen bg-black">
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <ParticleSphere />
        </Canvas>
        </div>
    );
}
