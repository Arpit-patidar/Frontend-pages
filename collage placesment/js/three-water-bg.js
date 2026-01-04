const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    1,
    1000
);
camera.position.z = 120;

const renderer = new THREE.WebGLRenderer({ alpha:true, antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.zIndex = "0";
renderer.domElement.style.pointerEvents = "none";

document.body.appendChild(renderer.domElement);

const count = 2400;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
const speed = [];

for(let i=0;i<count;i++){
    positions[i*3]   = (Math.random()-0.5)*450;
    positions[i*3+1] = (Math.random()-0.5)*260;
    positions[i*3+2] = (Math.random()-0.5)*220;
    speed[i] = Math.random()*0.6+0.3;
}

geometry.setAttribute("position",new THREE.BufferAttribute(positions,3));

const material = new THREE.PointsMaterial({
    color:0x66ffee,
    size:1.5,
    transparent:true,
    opacity:0.6,
    blending:THREE.AdditiveBlending
});

const water = new THREE.Points(geometry,material);
scene.add(water);

let mouseX=0, mouseY=0;
window.addEventListener("mousemove",(e)=>{
    mouseX=(e.clientX/window.innerWidth-0.5);
    mouseY=(e.clientY/window.innerHeight-0.5);
});

function animate(){
    requestAnimationFrame(animate);

    const p = geometry.attributes.position.array;
    for(let i=0;i<count;i++){
        p[i*3+1]+=speed[i]*0.15;
        if(p[i*3+1]>160) p[i*3+1]=-160;
    }
    geometry.attributes.position.needsUpdate=true;

    water.rotation.y+=0.0006;
    water.rotation.x+=mouseY*0.0007;
    water.rotation.z+=mouseX*0.0007;

    renderer.render(scene,camera);
}
animate();

window.addEventListener("resize",()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
});
