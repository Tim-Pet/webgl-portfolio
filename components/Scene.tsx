import { GroupProps, useThree } from '@react-three/fiber'
import React from 'react'

type Props = GroupProps & {
  children: any
}

const Scene = ({ children, ...props }: Props) => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </>
  )
}

export default Scene
