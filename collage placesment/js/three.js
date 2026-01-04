// ================= COMMON THREE.JS BACKGROUND =================

// SCENE
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    1,
    1000
);
camera.position.z = 120;

// RENDERER
const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.zIndex = "-1"; // 🔴 BACKGROUND
document.body.appendChild(renderer.domElement);

// ================= PARTICLES =================
const particleCount = 1200;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 500;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
    color: 0x00ff9c,
    size: 1.4,
    transparent: true,
    opacity: 0.6
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// ================= LIGHTING =================
const ambientLight = new THREE.AmbientLight(0x00ff9c, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(50, 50, 50);
scene.add(pointLight);

// ================= MOUSE INTERACTION =================
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 30;
});

// ================= ANIMATION =================
function animate() {
    requestAnimationFrame(animate);

    particles.rotation.y += 0.0006;
    particles.rotation.x += 0.0003;

    camera.position.x += (mouseX - camera.position.x) * 0.03;
    camera.position.y += (mouseY - camera.position.y) * 0.03;

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}
animate();

// ================= RESIZE =================
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
