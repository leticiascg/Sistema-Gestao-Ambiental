import { useState} from "react";
import "./PaginaInterna.css";

export default function Denuncias() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    if (enviado) {
        return (
            <div className="pagina-interna">
                <div className="pagina-conteudo">
                    <div className="sucesso">
                        <h2 className="sucesso-titulo">Denúncia enviada.</h2>
                        <p className="sucesso-texto">Sua denúncia foi recebida. Iremos analisar e tomar as providências necessárias.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pagina-interna">
            <div className="pagina-conteudo">
                <h1 className="pagina-titulo">Formulário de Denúncia de Descarte Irregular</h1>
                <form className="formulario" onSubmit={handleSubmit}>

                    <div className="campo">
                        <label className="campo-label">Localização</label>
                        <input className="campo-input" type="text" />
                    </div>

                    <div className="campo">
                        <label className="campo-label">Tipo da Infração</label>
                        <input className="campo-input" type="text" />
                    </div>

                    <div className="campo">
                        <label className="campo-label">Descrição Detalhada</label>
                        <textarea className="campo-input campo textarea" rows={4} />
                    </div>

                    <div className="campo">
                        <label className="campo-label">Upload de Foto</label>
                        <input className="campo-input" type="file" accept="image/*"/>
                    </div>

                    <div className="campo">
                        <label className="campo-label">Data da Ocorrência</label>
                        <input className="campo-input" type="date" />
                    </div>

                    <div className="campo">
                        <label className="campo-label">Identificação (opcional)</label>
                        <input className="campo-input" type="text" />
                    </div>

                    <div className="formulario-botoes">
                        <button type="submit" className="btn-v">Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}