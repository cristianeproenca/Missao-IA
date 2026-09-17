const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual estilo de viagem mais combina com você?",
        alternativas: [
            {
                texto: "Explorar a natureza e conhecer paisagens naturais.",
                afirmacao:
                    "Você valoriza o contato com a natureza e prefere experiências tranquilas, cercadas por belas paisagens."
            },
            {
                texto: "Explorar novos destinos e viver grandes aventuras.",
                afirmacao:
                    "Você gosta de aventura, de descobrir novos destinos e de viver experiências marcantes."
            }
        ]
    },

    {
        enunciado: "Qual atividade você escolheria durante uma viagem?",
        alternativas: [
            {
                texto: "Fazer trilhas e conhecer lugares naturais.",
                afirmacao:
                    "Você aprecia atividades ao ar livre e gosta de conhecer ambientes naturais."
            },
            {
                texto: "Praticar esportes e atividades de aventura.",
                afirmacao:
                    "Você procura desafios, emoção e experiências diferentes durante suas viagens."
            }
        ]
    },

    {
        enunciado: "Qual destino seria ideal para suas próximas férias?",
        alternativas: [
            {
                texto: "Montanhas, florestas, rios ou praias.",
                afirmacao:
                    "Seu perfil combina com destinos tranquilos, paisagens naturais e momentos de conexão com a natureza."
            },
            {
                texto: "Um destino com desafios e muita exploração.",
                afirmacao:
                    "Seu perfil combina com destinos movimentados, atividades emocionantes e novas experiências."
            }
        ]
    }
];

let perguntaAtual = 0;
let resultadoFinal = "";

function mostrarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}

function selecionarResposta(alternativa) {
    resultadoFinal += alternativa.afirmacao + " ";

    perguntaAtual++;

    mostrarPergunta();
}

function mostrarResultado() {
    caixaPerguntas.textContent = "Seu perfil de viajante";

    textoResultado.textContent = resultadoFinal;

    caixaAlternativas.innerHTML = "";
}

mostrarPergunta();
