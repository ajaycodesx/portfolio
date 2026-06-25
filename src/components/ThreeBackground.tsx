'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NetworkNodes() {
  const count = 90;
  const maxDistance = 1.6;
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Store node positions & velocities in refs to avoid React re-renders in useFrame loop
  const particles = useRef<{
    positions: Float32Array;
    velocities: Float32Array;
  }>({
    positions: new Float32Array(count * 3),
    velocities: new Float32Array(count * 3),
  });

  // Limit maximum line connections to ensure smooth 60 FPS performance
  const maxLines = 500;
  const linePositions = useRef(new Float32Array(maxLines * 2 * 3));
  const lineColors = useRef(new Float32Array(maxLines * 2 * 3));

  useEffect(() => {
    const pos = particles.current.positions;
    const vel = particles.current.velocities;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Position - scatter in a 6x6x6 space box
      pos[i3] = (Math.random() - 0.5) * 6.5;
      pos[i3 + 1] = (Math.random() - 0.5) * 6.5;
      pos[i3 + 2] = (Math.random() - 0.5) * 6.5;

      // Velocity - slow drifting motion (ideal for backend network representation)
      vel[i3] = (Math.random() - 0.5) * 0.005;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.005;
    }
  }, []);

  useFrame((state) => {
    const { positions, velocities } = particles.current;
    
    // 1. Update positions of each node and bounce at bounds
    const boundary = 3.6;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];

      // Bound collision checks
      if (Math.abs(positions[i3]) > boundary) velocities[i3] *= -1;
      if (Math.abs(positions[i3 + 1]) > boundary) velocities[i3 + 1] *= -1;
      if (Math.abs(positions[i3 + 2]) > boundary) velocities[i3 + 2] *= -1;
    }

    // 2. Mark positions attribute as needing update
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 3. Compute connections based on proximity threshold
    const linePos = linePositions.current;
    const lineCol = lineColors.current;
    let lineIdx = 0;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x1 = positions[i3];
      const y1 = positions[i3 + 1];
      const z1 = positions[i3 + 2];

      for (let j = i + 1; j < count; j++) {
        const j3 = j * 3;
        const x2 = positions[j3];
        const y2 = positions[j3 + 1];
        const z2 = positions[j3 + 2];

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const dist = Math.sqrt(distSq);
          
          // Connect nodes: opacity fades as distance approaches threshold limit
          const opacity = 1.0 - dist / maxDistance;

          const pIdx = lineIdx * 6;
          linePos[pIdx] = x1;
          linePos[pIdx + 1] = y1;
          linePos[pIdx + 2] = z1;

          linePos[pIdx + 3] = x2;
          linePos[pIdx + 4] = y2;
          linePos[pIdx + 5] = z2;

          // Theme gradient colors: blue (#3b82f6) to purple (#8b5cf6)
          const baseOpacity = opacity * 0.35; // Cap maximum lines opacity at 0.35
          lineCol[pIdx] = 0.23 * baseOpacity;     // R
          lineCol[pIdx + 1] = 0.5 * baseOpacity;   // G
          lineCol[pIdx + 2] = 0.96 * baseOpacity;  // B

          lineCol[pIdx + 3] = 0.54 * baseOpacity; // R
          lineCol[pIdx + 4] = 0.36 * baseOpacity; // G
          lineCol[pIdx + 5] = 0.96 * baseOpacity; // B

          lineIdx++;
          if (lineIdx >= maxLines) break;
        }
      }
      if (lineIdx >= maxLines) break;
    }

    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, lineIdx * 2);
    }

    // 4. Subtle parallax tracking on mouse movement
    const pointer = state.pointer;
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.08, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.08, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Nodes (Particles) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.current.positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.055}
          color="#3b82f6"
          transparent
          opacity={0.55}
          sizeAttenuation={true}
        />
      </points>

      {/* Network Edges (Connections) */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions.current, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors.current, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors linewidth={1} transparent depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden">
      {/* Soft glowing ambient gradients (auroras) */}
      <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      
      {/* Modern, high-end technical dot grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle blueprint-style vertical gridlines */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px)`,
          backgroundSize: '120px 100%'
        }}
      />

      {/* Dynamic 3D network connection graph */}
      <Canvas camera={{ position: [0, 0, 5.5], fov: 60 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.8} />
        <NetworkNodes />
      </Canvas>
    </div>
  );
}
