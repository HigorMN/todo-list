function adicionarTarefa() {
  const btnAdicionar = document.getElementById('criar-tarefa');
  const text = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  btnAdicionar.addEventListener('click', function () {
    const createLi = document.createElement('li');
    createLi.innerText = text.value;
    list.appendChild(createLi);
    text.value = '';
    clickTarefas();
  });
}

adicionarTarefa();

function clickTarefas() {
  const list = document.getElementById('lista-tarefas').children;
  const selected = document.getElementsByClassName('colorB');

  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', function (event) {
      event.target.className = 'colorB';
      if (selected.length > 1) {
        selected[0].classList.remove('colorB');
      }
      event.target.className = 'colorB';
      if (selected.length > 1) {
        selected[1].classList.remove('colorB');
      }
    });
  }
}
