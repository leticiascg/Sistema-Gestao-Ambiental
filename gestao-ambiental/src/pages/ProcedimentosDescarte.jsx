import { useState } from "react";
import "./PaginaInterna.css";

const procedimentos = [
    {
        titulo: "Resíduos Recicláveis (Papel, Plástico, Metal e Vidro)",
        conteudo: [
            "Como preparar: Lave as embalagens para retirar resíduos orgânicos e seque-as antes de descartar.",
            "Onde descartar: Utilize os sacos plásticos adequados para a coleta seletiva que passa em horários específicos na sua região.",
        ],
    },

    {
        titulo: "Resíduos Especiais (Eletrônicos, Pilhas e Baterias)",
        conteudo: [
            "Como preparar: Não desmonte os equipamentos. Mantenha-os inteiros para descarte seguro.",
            "Onde descartar: Leve aos Ecopontos credenciados ou pontos de coleta em lojas especializadas.",
        ], 
    },

    {
        titulo: "Grandes Volumes (Móveis e Eletrodomésticos)",
        conteudo: [
            "Como preparar: Desmonte móveis grandes quando possível para facilitar o transporte.",
            "Onde descartar: Solicite coleta especial pelo nosso sistema ou leve diretamente aos Ecopontos.",
        ],
    },

    {
        titulo: "Entulhos de Construção e Óleo de Cozinha",
        conteudo: [
             "Entulhos: Não misture com lixo comum. Contrate empresas licenciadas ou use caçambas autorizadas.",
            "Óleo de cozinha: Guarde em garrafas PET e leve aos pontos de coleta específicos.",
        ],
    },
];

export default function ProcedimentosDescarte() {
    const [aberto, setAberto] = useState(null);

    const toggle = (i) => setAberto(aberto === i ? null : i);

    return (
        <div className="pagina-interna">
            <div className="pagina-conteudo">
                <h1 className="pagina-titulo">Procedimentos de Descarte: Como e Onde Jogar Fora</h1>
                <p className="procedimentos-intro">
                    Para garantir a preservação do ecossistema local e a saúde pública de Joinville,
                    siga as orientações abaixo para cada tipo de material:
                </p>

                <div className="accordion">
                    {procedimentos.map((p, i) => (
                        <div key = {i} className="accordion-item">
                            <button
                            className = {`accordion-btn ${aberto === i ? "aberto" : ""}`}
                            onClick = {() => toggle(i)}
                            >
                                {p.titulo}
                                <span className="accordion-chevron">{aberto === i ? "∧" : "∨"}</span>
                            </button>
                            {aberto === i && (
                                <div className="accordion-conteudo">
                                    <ul>
                                        {p.conteudo.map((item, j) => (
                                            <li key = {j} > {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}