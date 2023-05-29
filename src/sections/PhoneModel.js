import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import Model from '../assets/3D-Model/Scene.jsx'
const Container = styled.div`
  width:100vw;
  height:100vh;

  position:fixed;
  top:0;
  z-index:1;
  background-color:transparent;
`

const PhoneModel = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 14 }}>
        {/* 环境光 */}
        <ambientLight intensity={1.25} />
        {/* 定向光 */}
        <directionalLight position={0.4} />
        <Suspense fallback={null}>
          {/* 手机模型 */}
          <Model />
        </Suspense>
        <Environment preset="night" />
        {/* 轨道控制:box可以旋转 */}
        <OrbitControls />
      </Canvas>
    </Container>
  )
}

export default PhoneModel