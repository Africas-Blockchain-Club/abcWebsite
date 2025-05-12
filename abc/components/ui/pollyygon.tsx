"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const PolygonBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create polygonal terrain with depth illusion
    const createPolygonalTerrain = () => {
      const group = new THREE.Group();
      
      // Create multiple layers of polygons with different colors
      const layers = [
        { size: 1.2, color: 0xfacc15, opacity: 0.3, y: -0.5 }, // Front yellow
        { size: 1.5, color: 0xca8a04, opacity: 0.25, y: 0 },     // Middle amber
        { size: 2.0, color: 0x713f12, opacity: 0.2, y: 0.5 }     // Back brown
      ];

      layers.forEach((layer, i) => {
        const geometry = new THREE.IcosahedronGeometry(layer.size, 1);
        const material = new THREE.MeshBasicMaterial({
          color: layer.color,
          wireframe: true,
          transparent: true,
          opacity: layer.opacity
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = layer.y;
        mesh.rotation.x = Math.PI / 4;
        mesh.rotation.y = Math.PI / 4 * i;
        group.add(mesh);
      });

      return group;
    };

    const terrain = createPolygonalTerrain();
    scene.add(terrain);

    // Add subtle ambient light to enhance depth
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Static render (no animation loop needed)
    renderer.render(scene, camera);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default PolygonBackground;