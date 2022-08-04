import { MutableRefObject, Suspense, useRef, useEffect, useState, RefObject } from 'react'
import { Canvas, useThree, useFrame, } from '@react-three/fiber'
import { OrbitControls, useGLTF, PresentationControls, Stage, Html, Points, PointMaterial } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Position } from '@react-three/drei/helpers/Position'
import gsap from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh
    Object_7: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
    Object_11: THREE.Mesh
    Object_12: THREE.Mesh
    Object_13: THREE.Mesh
    Object_15: THREE.Mesh
    Object_17: THREE.Mesh
    Object_18: THREE.Mesh
    Object_19: THREE.Mesh
    Object_21: THREE.Mesh
    Object_22: THREE.Mesh
    Object_23: THREE.Mesh
    Object_24: THREE.Mesh
    Object_25: THREE.Mesh
  }
  materials: {
    MistyRo: THREE.MeshStandardMaterial
    Foregrou: THREE.MeshStandardMaterial
    Sketchy: THREE.MeshStandardMaterial
  }
}


function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)


  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult


  return (
    <group ref={group} {...props} dispose={null} scale={0.1} rotation={[4.5, 0, 9]}>
      <group>
        <mesh geometry={nodes.Object_6.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Foregrou} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Foregrou} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Foregrou} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.MistyRo} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Sketchy} />
      </group>



    </group>
  )
}

const Service = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const text2 = text2Ref.current!;
    const text1 = textRef.current!;
    gsap.fromTo(text1, { opacity: 0 }, {
      opacity: 1, duration: 3, scrollTrigger: {
        trigger: text1,
      }
    })
  }, [])

  return (
    <div className=' bg-black text-white' id='service'>
      <div className='min-h-screen grid-cols-2 grid'>
        <div className='text1' ref={textRef}>
          <div className=' mt-52 ml-24 flex-col'>
            <div className='text-5xl  font-futura mb-8'> We deliver customized services<span className='text-6xl'>.</span></div>
            <span className='text-3xl font-futura_light '>Neurometix partners with leading professionals in the fields of CNS biology, pharmacology, and regulatory requirements to deliver <span className='text-custom font-semibold italic'>customized</span>  services to biopharmaceutical and other life sciences companies working in the area of CNS research.</span>
            <div className='text-3xl font-futura_light mt-4 '>
              Preclinical and translational:
              <br /> <span className='p-8'> -</span> Viability
              <br /> <span className='p-8'> -</span> Gap analysis
              <br /> Regulatory:
              <br />  <span className='p-8'> -</span> Strategy
              <br /> <span className='p-8'> -</span> Submission
            </div>
          </div>
        </div>
        <div className='canv'>
          <Canvas flat camera={{ fov: 25, far: 1000 }} >
            <Suspense fallback={null}>
              <ambientLight intensity={0.2} color="blue" />

              <PresentationControls global zoom={0.8} rotation={[0, 1, 0]} polar={[0, 0]} azimuth={[-Math.PI / 4, Math.PI / 6]}>
                <Stage>
                  <Model />

                </Stage>
              </PresentationControls>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Service