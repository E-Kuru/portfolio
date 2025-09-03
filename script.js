const nebulaArea = document.querySelector('.hero');

// Crée un curseur personnalisé et l'ajoute à la page
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Crée un élément qui va suivre la souris pour la nébuleuse
const nebulaTrail = document.createElement('div');
nebulaTrail.classList.add('nebula-trail');
document.body.appendChild(nebulaTrail);

nebulaArea.addEventListener('mousemove', function (e) {
  // Positionner le curseur personnalisé
  const x = e.pageX;
  const y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  // Positionner la nébuleuse exactement à la même position que le curseur
  nebulaTrail.style.left = `${x}px`;
  nebulaTrail.style.top = `${y}px`;

  // Crée une nébuleuse qui suit la souris et disparaît après un délai
  const cursorNebula = document.createElement('div');
  cursorNebula.classList.add('nebula-trail');

  document.body.appendChild(cursorNebula);

  cursorNebula.style.left = `${x}px`;
  cursorNebula.style.top = `${y}px`;

  // Supprimer la nébuleuse après un petit délai
  setTimeout(() => {
    cursorNebula.remove();
  }, 500); // Supprimer après 500ms
});

const titles = document.querySelectorAll('.experience-title');

    titles.forEach(title => {
      title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        content.classList.toggle('open');
      });
    });
