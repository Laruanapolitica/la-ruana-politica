// Ejemplo de interactividad: Cambiar el color del header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.style.backgroundColor = '#e0b800'; // Amarillo más oscuro
  } else {
      header.style.backgroundColor = '#FFD700'; // Amarillo original
  }
});

// Función para mostrar el artículo completo
function showArticle(articleId) {
  const articleSection = document.getElementById('articulo-noticia-1');
  if (articleId === 'noticia-1') {
      articleSection.style.display = 'block';
      window.scrollTo({ top: articleSection.offsetTop, behavior: 'smooth' });
  }
}