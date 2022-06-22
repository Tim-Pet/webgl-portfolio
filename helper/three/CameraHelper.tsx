import React from 'react'
import { Euler, PerspectiveCamera, Vector3 } from 'three'

type Props = {
  fov?: number
  aspectRatio?: number
  near?: number
  far?: number
  position?: Vector3
  rotation?: Euler
}

const CameraHelper = ({
  fov = 30,
  aspectRatio = window.innerWidth / window.innerHeight,
  near = 0.01,
  far = 90,
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0),
  ...props
}: Props) => {
  const camera = new PerspectiveCamera(fov, aspectRatio, near, far)

  return (
    <group position={position} rotation={rotation}>
      <cameraHelper args={[camera]} />
    </group>
  )
}

export default CameraHelper
