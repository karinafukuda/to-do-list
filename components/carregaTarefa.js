import { Tarefa } from "./criaTarefa.js"

export const carregaTarefa = () => {
   const lista = document.querySelector('[data-list]')

   const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []
   lista.innerHTML = " " // limpa a lista
   tarefasCadastradas.forEach((tarefa) => {
   
      lista.appendChild(Tarefa(tarefa)) 
   })
}

// const criaTarefa = Tarefa(dados)
// const lista = document.querySelector('[data-list]')