const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const barraProgresso = document.querySelector(".barra-progresso");

const perguntas = [
    {
        enunciado: "Qual deve ser uma das principais prioridades no desenvolvimento da IA?",
        alternativas: [
            {
                texto: "Garantir que a inteligência artificial seja segura e utilizada de forma responsável.",
                afirmacao:
                    "Você valoriza a segurança, a responsabilidade e o uso consciente da inteligência artificial."
            },
            {
                texto: "Acelerar o desenvolvimento para criar novas tecnologias e soluções.",
                afirmacao:
                    "Você valoriza a inovação e acredita que o desenvolvimento tecnológico pode criar novas possibilidades para a sociedade."
            }
        ]
    },

    {
        enunciado: "Como a inteligência artificial pode contribuir para a sociedade?",
        alternativas: [
            {
                texto: "Ajudando em áreas como educação, saúde, ciência e acessibilidade.",
                afirmacao:
                    "Você vê a IA como uma ferramenta que pode contribuir para melhorar serviços e ampliar oportunidades."
            },
            {
                texto: "Automatizando tarefas e aumentando a produtividade das pessoas e empresas.",
                afirmacao:
                    "Você destaca o potencial da IA para automatizar atividades, economizar tempo e transformar o trabalho."
            }
        ]
    },

    {
        enunciado: "Qual desafio merece mais atenção no futuro da inteligência artificial?",
        alternativas: [
            {
                texto: "Privacidade, segurança e proteção dos dados das pessoas.",
                afirmacao:
                    "Você considera a proteção de dados e a privacidade questões importantes para o desenvolvimento da inteligência artificial."
            },
            {
                texto: "Preparar as pessoas para as mudanças no mercado de trabalho.",
                afirmacao:
                    "Você considera importante preparar a sociedade para as transformações profissionais provocadas pelo avanço da inteligência artificial."
            }
        ]
    }
];

let perguntaAtual = 0;
let resultadoFinal = "";


/* ========================================
   MOSTRAR PERGUNTA
======================================== */

function mostrarPergunta() {

    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.textContent = pergunta.enunciado;

    caixaAlternativas.innerHTML = "";

    atualizarProgresso();

    pergunta.alternativas.forEach((alternativa) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}


/* ========================================
   SELECIONAR RESPOSTA
======================================== */

function selecionarResposta(alternativa) {

    resultadoFinal += alternativa.afirmacao + " ";

    perguntaAtual++;

    mostrarPergunta();
}


/* ========================================
   ATUALIZAR PROGRESSO
======================================== */

function atualizarProgresso() {

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    barraProgresso.style.width = `${progresso}%`;
}


/* ========================================
   MOSTRAR RESULTADO
======================================== */

function mostrarResultado() {

    caixaPerguntas.textContent =
        "O que suas escolhas revelam?";

    textoResultado.textContent =
        resultadoFinal;

    caixaAlternativas.innerHTML = "";

    caixaResultado.style.display = "block";

    barraProgresso.style.width = "100%";
}


/* ========================================
   INICIAR QUIZ
======================================== */

mostrarPergunta();