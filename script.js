function dblCl() {
  const list = document.getElementsByTagName('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('dblclick', function () {
      list[index].classList.toggle('completed');
    });
  }
}

function adicionarTarefa() {
  const btnAdicionar = document.getElementById('criar-tarefa');
  const text = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  btnAdicionar.addEventListener('click', function () {
    const createLi = document.createElement('li');
    createLi.innerText = text.value;
    dblCl();
    list.appendChild(createLi);
    text.value = '';
    clickTarefas();
    dblCl();
  });
}

adicionarTarefa();

function clickTarefas() {
  const list = document.getElementById('lista-tarefas').children;
  const selected = document.getElementsByClassName('colorB');

  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', function (event) {
      event.target.classList.add('colorB');
      if (selected.length > 1) {
        selected[0].classList.remove('colorB');
      }
      event.target.classList.add('colorB');
      if (selected.length > 1) {
        selected[1].classList.remove('colorB');
      }
    });
  }
}

function clear() {
  const apagar = document.getElementById('apaga-tudo');
  const list = document.getElementById('lista-tarefas');

  apagar.addEventListener('click', function () {
    list.innerHTML = '';
  });
}

clear();

function removeSelec() {
  const selected = document.getElementsByClassName('completed');
  const remove = document.getElementById('remover-finalizados');

  remove.addEventListener('click', function () {
    for(let index = 0; index < selected.length; index += 1){
      selected[index].remove();
      selected[index].remove();
    }
  });
}

removeSelec();
