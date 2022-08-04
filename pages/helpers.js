import * as THREE from 'three'
import flatten from 'lodash-es/flatten'
import { SVGLoader as loader } from './SVGLoader'
import './styles.css'

const doubleSide = THREE.DoubleSide
const deg = THREE.Math.degToRad
const colors = ['#21242d']
const svgs = ['night']
  .map(name => `https://raw.githubusercontent.com/drcmda/react-three-fiber/master/examples/src/resources/images/svg/${name}.svg`)
  .map(
    url =>
      new Promise(resolve =>
        new loader().load(url, shapes => {
          console.log(shapes)
          return resolve(flatten(shapes.map((group, index) => group.toShapes(true).map(shape => ({ shape, color: group.color, index })))))
        })
      )
  )

export { svgs, colors, deg, doubleSide }
