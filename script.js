const perguntas = [
  {
    pergunta: "Qual jogador é conhecido como 'O Fenômeno'?",
    respostas: [
      "Neymar",
      "Ronaldinho Gaúcho",
      "Ronaldo"
    ],
    resultado: 2
  },
  {
    pergunta: "Quantos títulos mundiais de clubes o São Paulo Futebol Clube possui?",
    respostas: [
      "2",
      "3",
      "4"
    ],
    resultado: 1
  },
  {
    pergunta: "Qual clube é conhecido como 'O Time do Povo'?",
    respostas: [
      "Santos",
      "Corinthians",
      "Flamengo"
    ],
    resultado: 1
  },
  {
    pergunta: "Quem foi o capitão da seleção brasileira na Copa do Mundo de 2002?",
    respostas: [
      "Ronaldinho Gaúcho",
      "Cafu",
      "Ronaldo"
    ],
    resultado: 1
  },
  {
    pergunta: "Qual desses jogadores é conhecido como 'Rei Pelé'?",
    respostas: [
      "Pelé",
      "Romário",
      "Ronaldo"
    ],
    resultado: 0
  },
  {
    pergunta: "Em que ano o Brasil sediou a Copa do Mundo de Futebol pela última vez?",
    respostas: [
      "2006",
      "2010",
      "2014"
    ],
    resultado: 2
  },
  {
    pergunta: "Qual é o maior estádio de futebol do Brasil em capacidade?",
    respostas: [
      "Maracanã",
      "Mineirão",
      "Morumbi"
    ],
    resultado: 2
  },
  {
    pergunta: "Qual jogador é conhecido como 'O Maestro'?",
    respostas: [
      "Ronaldinho Gaúcho",
      "Kaká",
      "Rivaldo"
    ],
    resultado: 1
  },
  {
    pergunta: "Qual clube brasileiro possui mais títulos da Copa Libertadores da América?",
    respostas: [
      "Grêmio",
      "Internacional",
      "Cruzeiro"
    ],
    resultado: 0
  },
  {
    pergunta: "Qual desses jogadores é conhecido como 'Galinho'?",
    respostas: [
      "Ronaldo",
      "Zico",
      "Romário"
    ],
    resultado: 1
  }
];

//Pegando os elementos html e trazendo para o js
const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const corretas = new Set()
const totalPerguntas = perguntas.length
const result = document.querySelector(".acertos")
const btn = document.querySelector("button")
const totalAcertos = document.querySelector(".acertos span")
totalAcertos.textContent = corretas.size + " de " + totalPerguntas


for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))

    dt.querySelector("input").value = item.respostas.indexOf(resposta)

    dt.querySelector("input").onchange = (event) => {
      const questao = event.target.value == item.resultado
      
      corretas.delete(item)
      if (questao) {
        corretas.add(item)
      } 
      
      totalAcertos.textContent = corretas.size + " de " + totalPerguntas
    }
    quizItem.querySelector("dl").appendChild(dt)
  }
  
  quizItem.querySelector("dl dt").remove()
  
  quiz.appendChild(quizItem)
}

function test () {
  result.classList.remove('hide')
}

btn.addEventListener('click', test)




