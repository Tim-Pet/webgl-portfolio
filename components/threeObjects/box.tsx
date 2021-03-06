import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Box(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ clock }) => {
    // console.log(clock.elapsedTime)
    if (mesh.current) {
      mesh.current.rotation.y += 0.01
    }
  })

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.4 : 0.2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
