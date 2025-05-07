"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0f0c29]">
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }} gl={{ antialias: true }}>
        <color attach="background" args={["#0f0c29"]} />
        <ambientLight intensity={0.5} />
        <ConnectedParticles count={40} /> {/* Optimal number for 3 connections each */}
      </Canvas>
    </div>
  );
};

const ConnectedParticles = ({ count = 40 }) => {
  const particles = useRef<THREE.Mesh[]>([]);
  const lines = useRef<{line: THREE.Line, startIdx: number, endIdx: number}[]>([]);
  const { scene } = useThree();

  // Initialize connections
  useEffect(() => {
    // Create initial connections (3 per particle)
    const connections = new Map<number, number[]>();
    
    // First create a basic connected graph
    for (let i = 0; i < count; i++) {
      if (!connections.has(i)) connections.set(i, []);
      
      // Connect to next 3 particles (with wrap-around)
      for (let j = 1; j <= 3; j++) {
        const target = (i + j) % count;
        if (!connections.get(i)?.includes(target) && !connections.get(target)?.includes(i)) {
          connections.get(i)?.push(target);
        }
      }
    }

    // Create Three.js lines for connections
    lines.current.forEach(l => scene.remove(l.line));
    lines.current = [];

    connections.forEach((targets, i) => {
      targets.forEach(targetIdx => {
        if (particles.current[i] && particles.current[targetIdx]) {
          const startPos = new THREE.Vector3();
          const endPos = new THREE.Vector3();
          
          particles.current[i].getWorldPosition(startPos);
          particles.current[targetIdx].getWorldPosition(endPos);
          
          const geometry = new THREE.BufferGeometry().setFromPoints([startPos, endPos]);
          const material = new THREE.LineBasicMaterial({
            color: '#3b82f6',
            transparent: true,
            opacity: 0.3
          });
          
          const line = new THREE.Line(geometry, material);
          scene.add(line);
          lines.current.push({ line, startIdx: i, endIdx: targetIdx });
        }
      });
    });

    return () => {
      lines.current.forEach(l => scene.remove(l.line));
    };
  }, [count, scene]);

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        // Position particles in a spherical distribution
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const radius = 12;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        return (
          <ParticleNode
            key={i}
            position={[x, y, z]}
            ref={(el: THREE.Mesh) => (particles.current[i] = el)}
            index={i}
          />
        );
      })}
    </>
  );
};

const ParticleNode = React.forwardRef<THREE.Mesh, {
  position: [number, number, number];
  index: number;
}>(({ position, index }, ref) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const originalPos = useRef(new THREE.Vector3(...position));
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  React.useImperativeHandle(ref, () => meshRef.current!);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    const time = clock.getElapsedTime();
    const offset = index * 100;
    
    // Organic floating motion
    meshRef.current.position.x = originalPos.current.x + Math.sin(time * 0.12 + offset) * 1.5;
    meshRef.current.position.y = originalPos.current.y + Math.cos(time * 0.15 + offset) * 1.5;
    meshRef.current.position.z = originalPos.current.z + Math.sin(time * 0.1 + offset * 1.2) * 1.5;
    
    // Subtle pulsing
    const scale = 0.6 + Math.sin(time * 0.8 + offset) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={originalPos.current}>
      <sphereGeometry args={[0.2, 16, 16]} /> {/* Slightly larger for visibility */}
      <meshBasicMaterial
        ref={materialRef}
        color="#60a5fa"
        transparent
        opacity={0.9}
      />
    </mesh>
  );
});

export default ParticleNetwork;