import { useState} from "react";
import "./PaginaInterna.css";

export default function SolicitarColeta() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    if (enviado) {
        return (
            <div className = "pagina-interna">
                <div className = "pagina-conteudo">
                    <div className = "sucesso">
                        <h2 className = "sucesso-titulo">Solicitação enviada.</h2>
                        <p className = "sucesso-texto">Sua solicitação de coleta foi recebida. Entraremos em contato em breve.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className = "pagina-interna">
            <div className = "pagina-conteudo">
                <h1 className = "pagina-titulo">Solicitação de Coleta</h1>
                <form className = "formulario" onSubmit = {handleSubmit}>

                    <div className = "campo">
                        <label className = "campo-label">Nome Completo</label>
                        <input className = "campo-input" type = "text" placeholder = "" />
                    </div>

                    <div className = "campo">
                        <label className = "campo-label">Endereço de Coleta</label>
                        <input className = "campo-input" type = "text" placeholder = "" />
                    </div>

                    <div className = "campo">
                        <label className = "campo-label">Ponto de Referência</label>
                        <input className = "campo-input" type = "text" placeholder = "" />
                    </div>

                    <div className = "campo">
                        <label className = "campo-label">Tipo de Resíduo</label>
                        <input className = "campo-input" type = "text" placeholder = "" />
                    </div>

                    <div className = "campo">
                        <label className = "campo-label">Descrição</label>
                        <textarea className = "campo-input campo-textarea" rows = {4} placeholder = "" />
                    </div>

                    <div className = "campo">
                        <label className = "campo-label">Telefone de Contato</label>
                        <input className = "campo-input" type = "tel" placeholder = "" />
                    </div>

                    <div className = "campo">
                        <label className = "campo-label">Data Sugerida</label>
                        <input className = "campo-input" type = "date" placeholder = "" />
                    </div>

                    <div className = "formulario-botoes">
                        <button type = "submit" className = "btn-v">Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}