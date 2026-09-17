const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual estilo de viagem mais combina com você?",
        alternativas: [
            {
                texto: "Explorar a natureza, conhecer paisagens naturais e aproveitar momentos de tranquilidade.",
                afirmacao: "Você valoriza o contato com a natureza e prefere experiências tranquilas, aproveitando paisagens e ambientes naturais."
            },
            {
                texto: "Explorar novos destinos e viver experiências emocionantes.",
                afirmacao: "Você gosta de aventura, de conhecer novos lugares e de experimentar atividades diferentes durante suas viagens."
            }
        ]
    },

    {
        enunciado: "Qual atividade você escolheria durante uma viagem?",
        alternativas: [
            {
                texto: "Fazer uma trilha e conhecer belas paisagens naturais.",
                afirmacao: "Você aprecia atividades ao ar livre e gosta de conhecer lugares cercados pela natureza."
            },
            {
                texto: "Praticar esportes radicais e conhecer lugares diferentes.",
                afirmacao: "Você busca experiências marcantes e demonstra interesse por atividades que proporcionam desafios e emoção."
            }
        ]
    },

    {
        enunciado: "Qual destino seria ideal para suas próximas férias?",
        alternativas: [
            {
                texto: "Um lugar cercado por montanhas, florestas, rios ou praias.",
                afirmacao: "Seu perfil de viajante está relacionado à tranquilidade, à natureza e à descoberta de paisagens naturais."
            },
            {
                texto: "Um destino com atividades de aventura e muitas opções de exploração.",
                afirmacao: "Seu perfil de viajante está relacionado à aventura, à exploração e à busca por novas experiências."
            }
        ]
    }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botao