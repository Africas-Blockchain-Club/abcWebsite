"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const PolygonBorderBackground = () => {
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
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a frame of polygonal shapes around the border
    const createPolygonalFrame = () => {
      const group = new THREE.Group();
      const frameWidth = 10;
      const frameHeight = 5;
      const depth = 0.5;
      const segmentCount = 16; // Number of segments per side

      // Create materials with gradient colors
      const frontMaterial = new THREE.MeshBasicMaterial({
        color: 0xfacc15,
        wireframe: false,
        transparent: true,
        opacity: 0.6
      });

      const backMaterial = new THREE.MeshBasicMaterial({
        color: 0x713f12,
        wireframe: false,
        transparent: true,
        opacity: 0.3
      });

      // Create segments for each side
      const createSide = (length: number, isVertical: boolean) => {
        const segmentLength = length / segmentCount;
        
        for (let i = 0; i < segmentCount; i++) {
          const geometry = new THREE.IcosahedronGeometry(0.8, 0);
          const material = i % 2 === 0 ? frontMaterial : backMaterial;
          const segment = new THREE.Mesh(geometry, material);

          if (isVertical) {
            segment.position.x = -frameWidth/2 + (frameWidth * i/segmentCount);
            segment.position.y = frameHeight/2 * (i % 2 === 0 ? 1 : -1);
          } else {
            segment.position.y = -frameHeight/2 + (frameHeight * i/segmentCount);
            segment.position.x = frameWidth/2 * (i % 2 === 0 ? 1 : -1);
          }

          segment.position.z = i % 3 === 0 ? depth : -depth;
          group.add(segment);
        }
      };

      // Create all four sides
      createSide(frameWidth * 2, true); // Top and bottom
      createSide(frameHeight * 2, false); // Left and right

      return group;
    };

    const polyFrame = createPolygonalFrame();
    scene.add(polyFrame);

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xfacc15, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Static render
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

export default PolygonBorderBackground;