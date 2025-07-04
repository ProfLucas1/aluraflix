const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dos seguintes é um exemplo de inteligência artificial fraca (IA estreita)?",
        alternativas: [
            {
                texto: "Um programa de xadrez que só pode jogar xadrez.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Um sistema de IA que pode realizar qualquer tarefa intelectual que um ser humano possa.",
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "O que é aprendizado de máquina?",
        alternativas: [
            {
                texto: "Um campo da IA que permite que os computadores aprendam com dados sem serem explicitamente programados.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A criação de robôs humanoides que podem pensar e sentir.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo principal do processamento de linguagem natural (PLN)?",
        alternativas: [
            {
                texto: "Desenvolver softwares para reconhecimento facial em tempo real.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Permitir que os computadores entendam, interpretem e gerem a linguagem humana.",
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Qual das seguintes é uma preocupação ética comum relacionada à inteligência artificial?",
        alternativas: [
            {
                texto: "O potencial para a IA perpetuar ou exacerbar vieses existentes nos dados de treinamento.",
                afirmacao: "afirmacao"
            },
            {
                texto: "A IA tornará todos os softwares de computador obsoletos.",
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "O que diferencia o aprendizado profundo do aprendizado de máquina tradicional?",
        alternativas: [
            {
                texto: "O aprendizado profundo exige que os dados sejam rotulados manualmente antes do treinamento.",
                afirmacao: "afirmacao"
            },
            {
                texto: "O aprendizado profundo usa redes neurais com muitas camadas para extrair recursos complexos dos dados.",
                afirmacao: "afirmacao"
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();