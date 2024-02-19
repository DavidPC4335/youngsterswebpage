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

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

//scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

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
      }
    );
  }
);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

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
console.log(stars);
// Background

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // camera.position.z = t * -0.1;
  // camera.position.x = t * -0.002;
  // camera.rotation.y = t * -0.002;
  camera.rotateX(t * -0.0002);
  if (laptop != null) {
    laptop.position.z = t / 10 + -0.001;
    laptop.position.x = t * -0.002;
    laptop.rotation.y = t * -0.002;
  }
  for (var i = 0; i < 200; i++) {
    stars[i].position.z += 0.01;
    stars[i].position.x += 0.01;
    stars[i].rotation.y += 0.01;
  }
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
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
  }
  scene// controls.update();

  .renderer
    .render(scene, camera);
}

animate();
