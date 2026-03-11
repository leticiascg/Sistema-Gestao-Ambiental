import "./Home.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const servicos = [
    {
        titulo: "Ecopontos",
        descricao: "Encontre locais adequados mais próximos para descartar seus resíduos corretamente.",
    },
    {
        titulo: "Gestão ambiental",
        descricao: "Soluções integradas para o manejo inteligente e sustentável dos resíduos urbanos.",
    },
    {
        titulo: "Tratamento final",
        descricao: "Acompanhe o destino seguro e os processos de transformação dos resíduos coletados.",
    },
    {
        titulo: "Locais e horários",
        descricao: "Visualizar locais e horários de coleta.",
    },
];

const slides = [
    {
        titulo: "Gestão eficiente dos resíduos urbanos",
        texto:
            "A gestão eficiente dos resíduos urbanos começa com a atitude consciente de cada cidadão no dia a dia. Descartar materiais como eletrônicos, móveis e entulhos de forma incorreta prejudica a saúde pública e compromete o meio ambiente local. Por isso, nossa plataforma centraliza informações sobre os Ecopontos e horários de coleta, facilitando o destino correto para cada material. Ao utilizar nossos canais de solicitação e denúncia, você contribui diretamente para uma cidade mais limpa e organizada.",
    },
    {
        titulo: "Como funciona a coleta seletiva?",
        texto:
            "A coleta seletiva separa os resíduos recicláveis dos orgânicos e rejeitos. Cada cor de lixeira representa um tipo de material: azul para papel, vermelho para plástico, verde para vidro e amarelo para metal. Participar é simples e faz toda a diferença para o meio ambiente.",
    },
];

export default function Home() {
    const navigate = useNavigate();
    const [slideAtual, setSlideAtual] = useState(0);

    const anterior = () =>
        setSlideAtual((s) => (s === 0 ? slides.length - 1 : s - 1));
    const proximo = () =>
        setSlideAtual((s) => (s === slides.length - 1 ? 0 : s + 1));

    return (
        <main className = "home">
            <section className = "capa">
                <img src = "/img/capa.png" alt = "Capa" className = "capa-img"/>
            </section>

            <section className = "acesso-rapido">
                <span className = "acesso-label">Acesso rápido</span>
                <div className = "acesso-botoes">
                    <button className = "btn-v" onClick = {() => navigate("/solicitar-coleta")}>Solicitar coleta</button>
                    <button className = "btn-v" onClick = {() => navigate("/denuncias")}>Denúncias</button>
                    <button className = "btn-v" onClick = {() => navigate("/procedimentos-descarte")}>Procedimentos de descarte</button>
                </div>
            </section>

            <section className = "servicos">
                <h2 className = "servicos-titulo">Nossos serviços</h2>
                <div className = "servicos-grid">
                    {servicos.map((s, i) => (
                        <div key = {i} className = "servico-card">
                            <h3 className = "servico-nome">{s.titulo}</h3>
                            <p className = "servico-desc">{s.descricao}</p>
                            <button className = "saiba-mais">saiba mais &rsaquo;</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className = "informativa">
                <h2 className = "informativa-titulo">Área informativa</h2>
                <div className = "carrossel">
                    <button className = "carrossel-btn" onClick = {anterior}>&#8249;</button>
                    <div className = "carrossel-conteudo">
                        <h3>{slides[slideAtual].titulo}</h3>
                        <p>{slides[slideAtual].texto}</p>
                    </div>
                    <button className = "carrossel-btn" onClick = {proximo}>&#8250;</button>
                </div>
            </section>

        </main>
    )
}