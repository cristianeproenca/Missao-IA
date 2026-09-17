const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual é um dos principais desafios da saúde pública?",
        alternativas: [
            {
                texto: "Garantir atendimento de qualidade para toda a população.",
                afirmacao: "Você se preocupada com a igualdade, a qualidade do atendimento e a redução das diferenças no acesso à saúde"
            },
            {
                texto:  "Reduzir os gastos públicos com saúde.",
                afirmacao: "Você  acredita que controlar os custos e utilizar melhor os recursos públicos é uma prioridade."
            }    
           
        ]
    },
    {
       
            enunciado: "Quem deve ter acesso aos serviços de saúde pública?",
            alternativas: [
                {
                    texto: " Todas as pessoas, independentemente de sua condição financeira.",
                    afirmacao: "Você defende a saúde como um direito de todos e valoriza a igualdade no acesso aos serviços."
                },
                {
                    texto:  "Principalmente as pessoas que não podem pagar por atendimento particular.",
                    afirmacao: ""
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();


