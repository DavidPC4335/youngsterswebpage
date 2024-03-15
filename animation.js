import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

//random func
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#c"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(20, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xf0f0f0 });
const torus = new THREE.Mesh(geometry, material);

//scene.add(torus);
torus.position.set(0, 0, 0);
const spaceTexture = new THREE.TextureLoader().load("images/space.png");
scene.background = spaceTexture;
// Lights
const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xababab);
scene.add(light, ambientLight);

//objects
var laptopLoaded = false;
var laptop = null;
const mtlLoader = new MTLLoader();
mtlLoader.load(
  "images/laptop/10119_Laptop_Computer_v2_max2011_SG_it2.mtl",
  (mtl) => {
    mtl.preload();
    const objLoader = new OBJLoader();
    objLoader.setMaterials(mtl);
    objLoader.load(
      "images/laptop/10119_Laptop_Computer_v2_max2011_SG_it2.obj",
      (root) => {
        scene.add(root);
        laptopLoaded = true;
        laptop = root;
        laptop.position.set(0, 0, 10);
        laptop.rotation.set(0, -2 * Math.PI, 0);
        root.clone();
      }
    );
  }
);
//Cubes
const loader = new THREE.TextureLoader();
function loadColorTexture(path) {
  const texture = loader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
const materials = [
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("images/icons/C_logo.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("images/icons/gameMaker.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("images/icons/java.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("images/icons/js_logo.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("images/icons/python.png"),
  }),
  new THREE.MeshBasicMaterial({
    map: loadColorTexture("images/icons/react.png"),
  }),
];
const cube = new THREE.Mesh(geometry, material);
function makeInstance(color, x, y, z) {
  const material = new THREE.MeshPhongMaterial({ color });
  const geometry = new THREE.BoxGeometry(10, 10, 10);
  const cube = new THREE.Mesh(geometry, materials);
  scene.add(cube);

  cube.position.set(x, y, z);
  return cube;
}
const cubey = -1.5,
  cubez = 1;
const cubes = [
  // makeInstance(0x44aa88, 0, cubey, cubez),
  makeInstance(0x8844aa, -25, cubey, cubez),
  makeInstance(0xaa8844, 25, cubey, cubez),
];
// Helpers

// const lightHelper = new THREE.PointLightHelper(Light);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
  return star;
}

var stars = [];
var starv = [];
for (var i = 0; i < 200; i++) {
  stars[i] = addStar();
  starv[i] = new THREE.Vector2(rand(-0.1, 0.1), rand(-0.1, 0.1));
}
// console.log(stars);
// Background

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // camera.position.z = t * -0.1;
  // camera.position.x = t * -0.002;
  // camera.rotation.y = t * -0.002;
  light.position.set(0, t * 10, t * -0.002);
  torus.position.z = t / 10 + 70;
  torus.position.x = t * -0.002;
  torus.position.y = t * -0.002;
  // camera.rotateX(t * -0.0002);
  if (laptop != null) {
    laptop.position.z = t / 10 + 10;
    // console.log(laptop.position.z);
    laptop.position.x = t * -0.002;
    laptop.rotation.y = t * -0.002;
  }
  cubes[0].position.x = t * -0.03 - 65;
  cubes[1].position.x = t * 0.03 + 70;
  console.log(cubes[0].position.x);
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;
  if (laptop != null) {
    if (laptop.position.z < -10) {
      laptop.rotation.y += 0.01;
    }
  }
  for (var i = 0; i < 200; i++) {
    stars[i].position.z += 0.1;
    if (stars[i].position.z > 50) {
      stars[i].position.z = -10;
    }
    stars[i].position.x += starv[i].x;
    if (stars[i].position.x > 50) {
      stars[i].position.x = -10;
    } else if (stars[i].position.x < -50) {
      stars[i].position.x = 10;
    }
    stars[i].rotation.y += starv[i].y;
    if (stars[i].rotation.y > 2 * Math.PI) {
      stars[i].rotation.y = 0;
    } else if (stars[i].rotation.y < 0) {
      stars[i].rotation.y = 2 * Math.PI;
    }
  } // controls.update();
  if (Math.abs(cubes[0].position.x) < 30) {
    for (var i = 0; i < cubes.length; i++) {
      cubes[i].rotation.x += 0.01;
      cubes[i].rotation.y += 0.01;
    }
  }
  renderer.render(scene, camera);
}

animate();
