const PASSWORD = "REDTHREAD";

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const target = document.getElementById(`page${pageNumber}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleHint(id) {
  const el = document.getElementById(id);
  el.classList.toggle('visible');
}

function checkPassword() {
  const input = document.getElementById('finalKey').value;
  const result = document.getElementById('result');
  const videoWrap = document.getElementById('videoWrap');

  const user = normalizeText(input);
  const pass = normalizeText(PASSWORD);
  const userNoSpaces = user.replace(/\s/g, '');
  const passNoSpaces = pass.replace(/\s/g, '');

  if (!user) {
    result.className = 'result bad';
    result.textContent = 'Escribe la palabra clave final para poder continuar 💌';
    videoWrap.classList.remove('visible');
    return;
  }

  if (user === pass || userNoSpaces === passNoSpaces) {
    result.className = 'result ok';
    result.innerHTML = 'Lo lograste, mi amor 💖<br>Tu sorpresa final ya está lista. Presiona el botón para verla.';
    videoWrap.classList.add('visible');
  } else {
    result.className = 'result bad';
    result.textContent = 'Esa no parece ser la clave correcta todavía... revisa cada pista otra vez, amor ✨';
    videoWrap.classList.remove('visible');
  }
}