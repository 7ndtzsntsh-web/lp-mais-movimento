// Animações de entrada. Quem pediu menos animação no sistema vê tudo parado.
AOS.init({
  once: true,
  offset: 50,
  duration: 800,
  easing: 'ease-out-cubic',
  disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
});

// Imagens não podem ser arrastadas (pedido do dono). O CSS e o draggable="false" já
// resolvem na maioria dos navegadores; isto cobre os que ignoram os dois.
document.addEventListener('dragstart', function (e) {
  if (e.target && e.target.tagName === 'IMG') e.preventDefault();
});

// O mapa do Google é carregado pelo próprio navegador (loading="lazy" no index.html).
// Não voltar a ligar o mapa por script: no aparelho do dono ele não apareceu assim.
