// Alura Midi - Curso de JavaScript: Crie um MIDI Player com JavaScript
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else {
    alert('Elemento não encontrado ou seletor inválido');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
  const instrumento = tecla.classList[1];           
  const idAudio    = `#som_${instrumento}`;        


  tecla.addEventListener('click', () => {
    tocaSom(idAudio);
  });


  tecla.addEventListener('keydown', evento => {
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
      tocaSom(idAudio);
    }
  });

  tecla.addEventListener('keyup', () => {
    tecla.classList.remove('ativa');
  });
});
