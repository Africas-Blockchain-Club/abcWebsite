import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing';

// Enhanced Particle component
const Particle = ({ position }: { position: THREE.Vector3 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  // Store original position for smooth animation
  const originalPosition = useRef(position.clone());
  
  // Smoother animation loop
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      
      // Smoother floating animation with easing
      meshRef.current.position.x = originalPosition.current.x + Math.cos(time * 0.2 + originalPosition.current.z) * 1.5;
      meshRef.current.position.y = originalPosition.current.y + Math.sin(time * 0.25 + originalPosition.current.x) * 1.5;
      meshRef.current.position.z = originalPosition.current.z + Math.sin(time * 0.15 + originalPosition.current.y) * 1.5;
      
      // Subtle pulsing with smoother transitions
      const scale = 1.2 + Math.sin(time * 1.5) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
      
      // Gentle opacity variation
      if (materialRef.current) {
        materialRef.current.opacity = 0.7 + Math.sin(time * 0.5) * 0.2;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <circleGeometry args={[0.3, 32]} /> {/* Larger circle geometry */}
      <meshBasicMaterial 
        ref={materialRef}
        color="#00a8ff" 
        transparent 
        opacity={0.8}
        depthWrite={false} // Better for background elements
      />
    </mesh>
  );
};

// Enhanced Particle System
const ParticleSystem = ({ count = 120 }: { count?: number }) => {
  const particles = useRef<THREE.Vector3[]>([]);
  
  // Initialize particles with more spread
  useEffect(() => {
    particles.current = Array.from({ length: count }, () => {
      return new THREE.Vector3(
        (Math.random() - 0.5) * 20, // Wider spread
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    });
  }, [count]);
  
  return (
    <>
      {particles.current.map((pos, i) => (
        <Particle key={i} position={pos} />
      ))}
    </>
  );
};

// Main component with enhanced effects
const ParticleBackground = () => {
  const [focusPoint, setFocusPoint] = useState([0, 0, 5]);
  const { camera } = useThree();
  
  // Smoother focus point transition
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (time % 8 < 0.1) {
      setFocusPoint([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        5 + (Math.random() - 0.5) * 5
      ]);
    }
  });
  
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.1}
        focalLength={0.05} // More subtle blur
        bokehScale={3}
        target={new THREE.Vector3(...focusPoint)}
      />
      <Bloom
        luminanceThreshold={0.1} // More sensitive to brightness
        luminanceSmoothing={1.2} // Smoother bloom
        intensity={2} // Stronger glow
      />
      <ParticleSystem count={150} />
    </EffectComposer>
  );
};

// Scene setup optimized for background
export const FloatingParticleBackground = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 25], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Ensure it stays in background
        background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)'
      }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[15, 15, 15]} intensity={1.5} />
      <ParticleBackground />
    </Canvas>
  );
};