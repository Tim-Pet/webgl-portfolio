import React from 'react'
import { GroupProps } from '@react-three/fiber'
import { CameraControls } from '../helper'

type Props = GroupProps & {
  children: any
}

const SceneSetup = ({ children, ...props }: Props) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <CameraControls />
      {children}
    </>
  )
}

export default SceneSetup
