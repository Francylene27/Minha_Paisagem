let isDia = true;

document.addEventListener('keydown', (e) => {
  if (e.key === 'd' || e.key === 'D') {
    isDia = !isDia;

    const ceu = document.querySelector('.ceu');
    const sol = document.querySelector('.sol');
    const mar = document.querySelector('.mar');

    if (isDia) {
      ceu.style.backgroundColor = 'rgb(103, 197, 235)';
      sol.style.background = 'radial-gradient(circle, #fff176, #ff9800)';
      mar.style.background = 'linear-gradient(to top, #001f3f, #2ed0f8)';
    } else {
      ceu.style.backgroundColor = '#0a0a2e';
      sol.style.background = 'radial-gradient(circle, #fffde7, #bdbdbd)';
      mar.style.background = 'linear-gradient(to top, #000510, #1a237e)';
    }
  }
})
//
document.addEventListener('click', (e) => {
  const onda = document.createElement('div');

  onda.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.7);
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: onda 1s ease-out forwards;
  `;

  document.body.appendChild(onda);

  onda.addEventListener('animationend', () => onda.remove());
});

document.querySelectorAll('.nuvem').forEach(nuvem => {
  nuvem.addEventListener('click', (e) => {
    e.stopPropagation();

    const posicaoAtual = nuvem.getBoundingClientRect().left;

    nuvem.style.animation = 'none';

    if (nuvem.dataset.direcao === 'esquerda') {
      nuvem.dataset.direcao = 'direita';
      nuvem.style.left = posicaoAtual + 'px';
      nuvem.style.animation = nuvem.style.animationDuration || '18s';
      nuvem.style.animation = `flutuar ${nuvem.dataset.duracao}s linear infinite`;
    } else {
      nuvem.dataset.direcao = 'esquerda';
      nuvem.style.left = posicaoAtual + 'px';
      nuvem.style.animation = `flutuarInverso ${nuvem.dataset.duracao}s linear infinite`;
    }
  });
});

document.querySelectorAll('.nuvem').forEach(nuvem => {
  const duracao = getComputedStyle(nuvem).animationDuration.replace('s', '');
  nuvem.dataset.duracao = duracao;
  nuvem.dataset.direcao = 'direita';
});