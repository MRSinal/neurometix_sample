import { MutableRefObject, Suspense, useRef, useEffect, useState, RefObject} from 'react'
import { Canvas, useThree, useFrame, } from '@react-three/fiber'
import { OrbitControls, useGLTF, PresentationControls, Stage, Html, Points, PointMaterial } from '@react-three/drei'
import { GLTF } from 'three-stdlib'




/** This component renders a shape */



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
        <group ref={group} {...props} dispose={null} scale={1.5} rotation={[4.8, 0, 5.4]}>
            <group>
                <mesh geometry={nodes.Object_6.geometry} material={materials.MistyRo} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.MistyRo} />
                <mesh geometry={nodes.Object_8.geometry} material={materials.MistyRo} />
                <mesh geometry={nodes.Object_9.geometry} material={materials.Foregrou} />
                <mesh geometry={nodes.Object_11.geometry} material={materials.MistyRo}/>
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





const Brain = (props : any) => {
    
    return (
        <div>

            <div className='canvas'>
                <Canvas flat dpr={[1, 2]} camera={{ fov: 28, far: 1200}}>

                    <Suspense fallback={null}>
                        

                        <Html center style={{}}>
                            <div className='text-7xl font-josefin uppercase text-title mt-12 tracking-widest mb-0'>
                                Neurometix
                            </div>
                            <div className="flex  mb-12 justify-center  items-center text-3xl font-futura_light font-light text-title tracking-widest">
                                <h2 >
                                Think outside of the box, <span className='flex justify-center  items-center'> and no BS.... </span>
                                </h2>

                            </div>
                        </Html>
                        <ambientLight intensity={0.2} color="blue" />
                        
                        <PresentationControls global zoom={0.8} rotation={[0, -0, 0]} polar={[0, 0]} azimuth={[-Math.PI / 6, Math.PI / 4]}>
                        <Stage>
                                <Model/>

                            </Stage>
                        </PresentationControls>
                    </Suspense>
                </Canvas>
            </div>

        </div>
    )
}


export default Brain