import BotaoConclui from "./concluiTarefa.js"
import BotaoDeleta from "./deletaTarefa.js"
import { carregaTarefa } from "./carregaTarefa.js"

//live-server

export const handleNovoItem = (evento) => {
   evento.preventDefault() //previne o comportamento padrão do formulário
   const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [] // JSON.parse  - transforma a string em objeto  e || [] array vazio , validação para 'se não houver item ele reinicializa como array vazio
   
   const input = document.querySelector('[data-form-input]')
   const valor = input.value

   const calendario = document.querySelector('[data-form-date]')
   const data = moment(calendario.value)

   const dataFormatada = data.format('DD/MM/YYYY')
   
   const dados = {
      valor,
      dataFormatada
   }

   const tarefasAtualizadas = [...tarefas, dados]  // spread operator - nesse cadso pega tudo o que se refere a 'tarefas' e 'dados'

   localStorage.setItem('tarefas' , JSON.stringify(tarefasAtualizadas))

   input.value = " "
   carregaTarefa()
}

export const Tarefa = ({valor, dataFormatada}) => {

   const tarefa = document.createElement('li')
   tarefa.classList.add('task')
   const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`
   tarefa.innerHTML = conteudo

   tarefa.appendChild(BotaoConclui())
   tarefa.appendChild(BotaoDeleta())

   return tarefa
}