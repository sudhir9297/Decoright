import { useGLTF, Bounds, Center } from '@react-three/drei/native'
import React from 'react'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & any

const Model = () => {
  const gltf = useGLTF(
    require('../assets/models/basket_swing_chair.glb')
  ) as GLTFResult

  return (
    <Bounds fit clip observe margin={1.2}>
      <Center>
        <primitive object={gltf.scene} />
      </Center>
    </Bounds>
  )
}

export default Model
