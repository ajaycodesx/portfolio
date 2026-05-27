'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);
  const [colors, setColors] = useState<Float32Array | null>(null);

  // Generate random star data inside an effect to keep render pure
  useEffect(() => {
    const pos = new Float32Array(5000 * 3);
    const col = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 10;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 10;

      // Blue to purple gradient colors
      col[i3] = 0.2 + Math.random() * 0.3; // R
      col[i3 + 1] = 0.4 + Math.random() * 0.4; // G
      col[i3 + 2] = 0.8 + Math.random() * 0.2; // B
    }

    setPositions(pos);
    setColors(col);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  if (!positions || !colors) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.8}
        roughness={0.1}
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.25;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, -3]}>
      <icosahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial
        color="#8b5cf6"
        metalness={0.8}
        roughness={0.1}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#0a0a0f']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars />
        <FloatingSphere />
        <FloatingIcosahedron />
      </Canvas>
    </div>
  );
}
