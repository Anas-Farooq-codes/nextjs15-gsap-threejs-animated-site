import React, { useRef } from 'react';
import * as THREE from "three";

interface HotspotProps {
    position: [number,number,number];
    isVisible: boolean;
    color?: string;
}

export function Hotspot({
position, isVisible, color="#E6FC6A"
}: HotspotProps) {
    const HotspotRef = useRef<THREE.Mesh>(null);






  return (
    <div>Hotspot</div>
  )
}