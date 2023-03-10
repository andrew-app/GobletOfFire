import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const modelLoader = new GLTFLoader();

const createLights = () => {
  const mainLight = new THREE.DirectionalLight(0xffffff, 1);
  mainLight.position.set(10, 10, 10);

  const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 1);
  scene.add(mainLight, hemisphereLight);
}



modelLoader.load('assets/goblet.glb', (glb) => {
  const goblet = glb.scene;
  scene.add(goblet);
  goblet.translateX(2.5);
  goblet.translateY(1);
});

camera.position.z = 1;


const animate = () => {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

createLights()
animate();