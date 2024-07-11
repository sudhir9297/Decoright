/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber/native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

type GLTFResult = GLTF & {
  nodes: {
    ['01_objects002']: THREE.Mesh
    COMPOUND001: THREE.Mesh
    COMPOUND001001: THREE.Mesh
    COMPOUND002001: THREE.Mesh
  }
  materials: {
    mat_0: THREE.MeshStandardMaterial
    ['mat_0.001']: THREE.MeshStandardMaterial
    mat_1: THREE.MeshStandardMaterial
  }
}

const ActionName = 'COMPOUND.001Action'

const Starlink = (props: JSX.IntrinsicElements['group']) => {
  const y = useSharedValue(0)
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(
    require('../assets/models/Starlink.glb')
  ) as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions[ActionName]?.play()
    y.value = withTiming(2, { duration: 2000 })
  }, [])

  useFrame(() => {
    group.current?.rotation.set(0, y.value, 0)
  })

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.5, 0]}
      scale={1}
    >
      <group name="Scene">
        <mesh
          name="01_objects002"
          castShadow
          receiveShadow
          geometry={nodes['01_objects002'].geometry}
          material={materials.mat_0}
          position={[0, 1.407, 0]}
          rotation={[0, -1.566, 0]}
          scale={4.23}
        />
        <group
          name="01_objects"
          position={[0, 1.687, 0]}
          rotation={[0, -1.566, 0]}
          scale={4.23}
        >
          <group name="COMPOUND003001">
            <mesh
              name="COMPOUND001"
              castShadow
              receiveShadow
              geometry={nodes.COMPOUND001.geometry}
              material={materials['mat_0.001']}
              position={[0.004, -0.029, -0.015]}
            />
            <mesh
              name="COMPOUND001001"
              castShadow
              receiveShadow
              geometry={nodes.COMPOUND001001.geometry}
              material={materials.mat_1}
            />
            <mesh
              name="COMPOUND002001"
              castShadow
              receiveShadow
              geometry={nodes.COMPOUND002001.geometry}
              material={materials.mat_1}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Starlink
