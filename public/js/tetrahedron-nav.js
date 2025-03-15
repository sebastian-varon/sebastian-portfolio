import * as THREE from "/node_modules/three/build/three.module.js";

// Initialize Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("tetrahedron-container").appendChild(renderer.domElement);

// Create Tetrahedron Geometry
const geometry = new THREE.TetrahedronGeometry(2);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const tetrahedron = new THREE.Mesh(geometry, material);
scene.add(tetrahedron);

// Adjust Camera Position
camera.position.set(0, 0, 5);
camera.lookAt(tetrahedron.position);

// Mouse Drag Controls
let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;

document.addEventListener("mousedown", (event) => {
    isDragging = true;
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - previousMouseX;
    const deltaY = event.clientY - previousMouseY;

    tetrahedron.rotation.y += deltaX * 0.01;
    tetrahedron.rotation.x += deltaY * 0.01;

    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
});

// Auto Rotate Animation
function animate() {
    requestAnimationFrame(animate);
    tetrahedron.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// Resize Handling
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Debug Message
console.log("Tetrahedron Loaded Successfully");