
const photoContainer = document.getElementById('heart-container');


const photos = [
  'images/foto1.jpg',
  'images/foto7.jpg',
  'images/foto3.jpg',
  'images/foto4.jpg',
  'images/foto5.jpg',
  'images/foto6.jpg',
];


function createPhoto() {
  const photo = document.createElement('div'); 
  photo.classList.add('floating-photo'); 

  // Asigna una imagen aleatoria del array de fotos
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
  photo.style.backgroundImage = `url(${randomPhoto})`;

  // Asigna una posición horizontal aleatoria
  photo.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria en el ancho de la ventana
  photo.style.top = Math.random() * 100 + 'vh'; // Posición aleatoria en el alto de la ventana

  // Añade la foto al contenedor
  photoContainer.appendChild(photo);

  // Elimina la foto después de que termine la animación
  setTimeout(() => {
    photo.remove();
  }, 6000); // Elimina la foto después de 6 segundos
}

// Generar fotos cada cierto tiempo
setInterval(createPhoto, 500); // Genera una foto cada 500 ms (ajustado a tu gusto)
// Función para generar lluvia de corazones
function createFallingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('falling-heart');
  
  heart.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
  heart.style.animationDuration = `${Math.random() * 4 + 3}s`; // Tiempo aleatorio de caída
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove(); // Elimina el corazón después de que caiga
  }, 7000); // Elimina el corazón después de 7 segundos
}

// Generar corazones cada 500 ms
setInterval(createFallingHeart, 500);

