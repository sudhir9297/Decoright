import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber/native'
import { useSharedValue, withTiming } from 'react-native-reanimated'

type GLTFResult = GLTF & {
  nodes: {
    Ring_Estofado_0: THREE.Mesh
    pe_02_pes_0: THREE.Mesh
    Line001_pernas_0: THREE.Mesh
    pe_01_pes_0: THREE.Mesh
    pe_003_pes_0: THREE.Mesh
    Line002_pernas_0: THREE.Mesh
    pe_004_pes_0: THREE.Mesh
  }
  materials: {
    Estofado: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    pernas: THREE.MeshStandardMaterial
  }
}

const Model = () => {
  const gltf = useGLTF(require('../assets/models/ring_chair.glb')) as GLTFResult
  return <primitive object={gltf.scene} />
}

export default Model
