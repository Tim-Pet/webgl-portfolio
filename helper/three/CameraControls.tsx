import React, { useRef } from 'react'
import { extend, ReactThreeFiber, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >
    }
  }
}

type Props = {}

const CameraControls = ({ ...props }: Props) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree()
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef<OrbitControls>(null)
  useFrame((state) => controls.current?.update())

  return <orbitControls ref={controls} args={[camera, domElement]} {...props} />
}

export default CameraControls
