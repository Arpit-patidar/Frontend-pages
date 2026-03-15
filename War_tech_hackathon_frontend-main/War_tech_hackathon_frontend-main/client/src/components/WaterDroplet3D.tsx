import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WaterDroplet3DProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
}

export function WaterDroplet3D({ 
  position = [0, 0, 0], 
  scale = 1,
  color = '#00bcd4'
}: WaterDroplet3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = null; // Transparent background

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(200, 200);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent
    containerRef.current.appendChild(renderer.domElement);

    // Create realistic teardrop shape using sphere geometry with custom deformation
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Modify to create perfect teardrop shape (pointed top, rounded bottom)
    const positions = geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = positions.getZ(i);
      
      // Normalize Y from -1 to 1, then convert to 0-1
      const normalizedY = (y + 1) / 2; // 0 at bottom, 1 at top
      
      // Create teardrop: very pointed top, rounded bottom
      let newY = y;
      
      if (normalizedY > 0.5) {
        // Top half - make it pointed (teardrop tip)
        const topFactor = (normalizedY - 0.5) * 2; // 0 to 1
        const pointiness = Math.pow(topFactor, 1.5); // Sharp point
        newY = 0 + (y - 0) * (1 - pointiness * 0.6); // Compress top
      } else {
        // Bottom half - make it more rounded/bulbous
        const bottomFactor = 1 - (normalizedY * 2); // 1 at bottom, 0 at middle
        const roundness = Math.pow(bottomFactor, 0.7);
        newY = y * (1 + roundness * 0.25); // Expand bottom
      }
      
      positions.setY(i, newY);
    }
    
    geometry.computeVertexNormals();

    // Create realistic water material - solid blue color
    const blueColor = new THREE.Color(color || '#00bcd4');
    const material = new THREE.MeshPhysicalMaterial({
      color: blueColor, // Solid blue color
      transparent: true,
      opacity: 0.9,
      roughness: 0.1,
      metalness: 0.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.85, // High transmission for water-like transparency
      thickness: 0.5,
      ior: 1.33, // Index of refraction for water
      side: THREE.DoubleSide,
    });

    const droplet = new THREE.Mesh(geometry, material);
    droplet.position.set(...position);
    droplet.scale.set(scale, scale, scale);
    scene.add(droplet);

    // Enhanced lighting for realistic highlights
    // Main directional light (creates primary highlight)
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(3, 5, 5);
    mainLight.castShadow = false;
    scene.add(mainLight);

    // Secondary light for fill (creates secondary highlight)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-3, 2, 3);
    scene.add(fillLight);

    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Point light for additional highlights
    const pointLight1 = new THREE.PointLight(0xffffff, 0.6, 100);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(blueColor.getHex(), 0.4, 100); // Blue tint
    pointLight2.position.set(-4, 3, 4);
    scene.add(pointLight2);

    // Add subtle internal glow effect using a slightly larger, more transparent sphere
    const glowGeometry = new THREE.SphereGeometry(1.02, 64, 64);
    const glowPositions = glowGeometry.attributes.position;
    
    // Apply same teardrop deformation to glow
    for (let i = 0; i < glowPositions.count; i++) {
      const x = glowPositions.getX(i);
      const y = glowPositions.getY(i);
      const z = glowPositions.getZ(i);
      
      const normalizedY = (y + 1) / 2;
      let newY = y;
      
      if (normalizedY > 0.5) {
        const topFactor = (normalizedY - 0.5) * 2;
        const pointiness = Math.pow(topFactor, 1.5);
        newY = 0 + (y - 0) * (1 - pointiness * 0.6);
      } else {
        const bottomFactor = 1 - (normalizedY * 2);
        const roundness = Math.pow(bottomFactor, 0.7);
        newY = y * (1 + roundness * 0.25);
      }
      
      glowPositions.setY(i, newY);
    }
    glowGeometry.computeVertexNormals();

    const glowMaterial = new THREE.MeshBasicMaterial({
      color: blueColor, // Same blue color
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide, // Render inside
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.set(...position);
    glow.scale.set(scale, scale, scale);
    scene.add(glow);

    // Add particle effects around the droplet (like WaterBackground)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      // Position particles in a sphere around the droplet
      const radius = 1.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Use blue color with variation
      const colorVariation = 0.7 + Math.random() * 0.3;
      particleColors[i * 3] = blueColor.r * colorVariation;
      particleColors[i * 3 + 1] = blueColor.g * colorVariation;
      particleColors[i * 3 + 2] = blueColor.b * colorVariation;
      
      // Random sizes
      particleSizes[i] = Math.random() * 0.1 + 0.05;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.position.set(...position);
    scene.add(particles);

    // Animation - subtle movement
    let time = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      time += 0.008;

      // Very subtle rotation
      droplet.rotation.y = time * 0.3;
      droplet.rotation.x = Math.sin(time * 0.2) * 0.1;
      
      glow.rotation.y = time * 0.3;
      glow.rotation.x = Math.sin(time * 0.2) * 0.1;

      // Subtle pulsing (like a heartbeat)
      const pulse = 1 + Math.sin(time * 1.5) * 0.02;
      droplet.scale.set(scale * pulse, scale * pulse, scale * pulse);
      glow.scale.set(scale * pulse * 1.02, scale * pulse * 1.02, scale * pulse * 1.02);

      // Animate lights slightly for dynamic highlights
      mainLight.position.x = 3 + Math.sin(time * 0.5) * 0.5;
      mainLight.position.y = 5 + Math.cos(time * 0.3) * 0.3;

      // Animate particles - rotate around droplet
      particles.rotation.y = time * 0.2;
      particles.rotation.x = Math.sin(time * 0.15) * 0.1;
      
      // Make particles twinkle and move
      const particlePositions = particles.geometry.attributes.position.array as Float32Array;
      const particleCount = particlePositions.length / 3;
      for (let i = 0; i < particleCount; i++) {
        const offset = i * 3;
        const baseRadius = 1.5;
        const variation = Math.sin(time * 2 + i * 0.1) * 0.3;
        const radius = baseRadius + variation;
        
        const theta = (time * 0.2 + i * 0.1) % (Math.PI * 2);
        const phi = (i * 0.15) % Math.PI;
        
        particlePositions[offset] = radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[offset + 1] = radius * Math.sin(phi) * Math.sin(theta);
        particlePositions[offset + 2] = radius * Math.cos(phi);
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [position, scale, color]);

  return <div ref={containerRef} className="w-[200px] h-[200px]" />;
}

