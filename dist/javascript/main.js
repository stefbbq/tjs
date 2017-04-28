$(document).ready(function(){
	// Set the scene size.
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;

	// Set some camera attributes.
	const VIEW_ANGLE = 45;
	const ASPECT = WIDTH / HEIGHT;
	const NEAR = 0.1;
	const FAR = 10000;

	// Get the DOM element to attach to
	const container =
	    document.querySelector('#container');

	// Create a WebGL renderer, camera
	// and a scene
	const renderer = new THREE.WebGLRenderer();
	const camera =
	    new THREE.PerspectiveCamera(
	        VIEW_ANGLE,
	        ASPECT,
	        NEAR,
	        FAR
	    );

	const scene = new THREE.Scene();

	// Add the camera to the scene.
	scene.add(camera);

	// Start the renderer.
	renderer.setSize(WIDTH, HEIGHT);

	// Attach the renderer-supplied
	// DOM element.
	document.body.appendChild(renderer.domElement);
	
	
	////////////// 2
	
	
// create the sphere's material
	const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x44A744, name: 'green' })
	const sphereMaterial2 = new THREE.MeshLambertMaterial({ color: 0xA74444, name: 'red' })
	
	var texture = new THREE.TextureLoader().load( "images/sand.jpg" );
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set( 4, 4 );
	
	sphereMaterial.map = texture
		
	// Set up the sphere vars
	const RADIUS = 50;
	const SEGMENTS = 32;
	const RINGS = 32;

	// Create a new mesh with
	// sphere geometry - we will cover
	// the sphereMaterial next!
	const sphere = new THREE.Mesh(

	  new THREE.SphereGeometry(
	    RADIUS,
	    SEGMENTS,
	    RINGS),

	  sphereMaterial);

	// Move the Sphere back in Z so we
	// can see it.
	sphere.position.z = -300;

	// Finally, add the sphere to the scene.
	scene.add(sphere);
	
	
	
// create a point light
const pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

// Draw!
// renderer.render(scene, camera);

function update () {
  // Draw!
  renderer.render(scene, camera);

  // Schedule the next frame.
  requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);
	$('body').mousemove(function(e){ 
		sphere.position.x = (e.pageX - WIDTH/2) / 10
		sphere.position.y = -(e.pageY - HEIGHT/2) / 10
	});
	$('body').click(function(e){
		sphere.material = (sphere.material.name == 'green') ? sphereMaterial2 : sphereMaterial
		console.log(sphere.material)
	})
})