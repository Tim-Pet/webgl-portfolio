import { GroupProps, useThree } from '@react-three/fiber'
import React from 'react'

type Props = GroupProps & {
  children: any
}

const Scene = ({ children, ...props }: Props) => {
  useThree(({ camera }) => {
    camera.rotation.set(0, 0, 0)
  })

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </>
  )
}

export default Scene
