'use client';

import { Canvas } from '@react-three/fiber';
import { PresentationControls, Float, MeshDistortMaterial } from '@react-three/drei';

function InteractiveShape() {
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <PresentationControls
        global
        snap
        rotation={[0.3, 0.4, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <group scale={0.95}>
          {/* Central Sphere (Nucleus) */}
          <mesh>
            <sphereGeometry args={[0.26, 32, 32]} />
            <meshStandardMaterial
              color="#00d8ff"
              emissive="#00d8ff"
              emissiveIntensity={0.8}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Ring 1 - Horizontal */}
          <mesh scale={[1.8, 0.65, 0.15]}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial
              color="#00d8ff"
              emissive="#00d8ff"
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Ring 2 - Rotated 60 degrees */}
          <mesh rotation={[0, 0, Math.PI / 3]} scale={[1.8, 0.65, 0.15]}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial
              color="#00d8ff"
              emissive="#00d8ff"
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>

          {/* Ring 3 - Rotated -60 degrees */}
          <mesh rotation={[0, 0, -Math.PI / 3]} scale={[1.8, 0.65, 0.15]}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial
              color="#00d8ff"
              emissive="#00d8ff"
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      </PresentationControls>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[450px] cursor-grab active:cursor-grabbing relative">
      {/* Decorative backglow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight position={[0, 5, 2]} angle={0.4} penumbra={1} intensity={1} />
        
        <InteractiveShape />
      </Canvas>
    </div>
  );
}
