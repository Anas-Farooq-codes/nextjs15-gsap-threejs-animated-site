"use client"
import * as THREE from "three";
import { Skateboard } from '@/components/Skateboard'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'

type Props = {
    deckTextureURL: string;
    wheelTextureURL: string;
    truckColor: string;
    boltColor: string;
}

export function InteractiveSkateboard({
    deckTextureURL, wheelTextureURL, truckColor, boltColor,
}: Props) {
  return (
    <div className='absolute inset-0 z-10 flex items-center justify-center'>

<Canvas className='min-h-[60rem] w-full'
 camera={{position: [1.5, 1, 1.4], fov: 55}}
 >
    <Suspense>
<Scene
   deckTextureURL={deckTextureURL}
   wheelTextureURL={wheelTextureURL}
   truckColor={truckColor}
   boltColor={boltColor}
/>
    </Suspense>
    </Canvas>        
    </div>
  )
}

function Scene({
    deckTextureURL, wheelTextureURL, truckColor, boltColor,
}: Props) {

    const containerRef = useRef<THREE.Group>(null);

    return (
        <group>
            <OrbitControls/>
<Environment files={"/hdr/warehouse-256.hdr"}/>
<group ref={containerRef}/>
<Skateboard
wheelTextureURLs={[wheelTextureURL]}
wheelTextureURL={wheelTextureURL}
deckTextureURLs={[deckTextureURL]}
deckTextureURL={deckTextureURL}
truckColor={truckColor}
boltColor={boltColor}
constantWheelSpin

/>
<ContactShadows opacity={0.6} position={[0, -0.08, 0]}/>
        </group>
    )
}
