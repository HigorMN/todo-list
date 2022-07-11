function adicionarTarefa() {
  const btnAdicionar = document.getElementById('criar-tarefa');
  const text = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  btnAdicionar.addEventListener('click', function () {
    const createLi = document.createElement('li');
    createLi.innerText = text.value;
    list.appendChild(createLi);
    text.value = '';
  });
}

adicionarTarefa();
