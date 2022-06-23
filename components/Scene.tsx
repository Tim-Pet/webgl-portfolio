import React from 'react'
import { GroupProps } from '@react-three/fiber'
import { Euler, Vector3 } from 'three'
import { CameraControls, CameraHelper, degToRad } from '../helper'

type Props = GroupProps & {
  children: any
}

const Scene = ({ children, ...props }: Props) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <CameraHelper
        position={new Vector3(1.5, 0, 0)}
        rotation={new Euler(0, degToRad(90), 0)}
        near={1}
        far={5}
      /> */}
      <CameraControls />
      {children}
    </>
  )
}

export default Scene
