import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const dropdownData = {
  Serviços: ["Serviço 1", "Serviço 2", "Serviço 3"],
  Sustentabilidade: ["Compensação de Carbono", "Projetos Sociais", "Educação Ambiental"],
  "Fale conosco": ["Contato", "Suporte", "Parcerias", "Trabalhe Conosco"],
};

//COMPONENTE DE CADA ITEM DO MENU
const NavItem = ({ label }) => {
  const [open, setOpen] = useState(false);

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); 
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Botão do menu - classe "active" é adicionada quando open=true */}
      <button className={`nav-button ${open ? "active" : ""}`}>
        {label}

        {/* Chevron que gira via CSS quando open=true */}
        <svg
          className={`chevron ${open ? "open" : ""}`}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown - classe "visible" controla a visibilidade via CSS */}
      <div className={`dropdown ${open ? "visible" : ""}`}>
        <div className="dropdown-arrow" />
        {dropdownData[label].map((item, i) => (
          <button key={i} className="dropdown-item">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

//COMPONENTE PRINCIPAL
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <img 
        src="/img/logo.png" 
        alt="Logo" 
        className="navbar-logo"
        onClick = {() => navigate("/")} 
        style = {{cursor: "pointer" }}
      />
      <span className = "navbar-nome">Gestão de Resíduos Ambientais</span>

      <div className="nav-links">
        {/* Gera um NavItem para cada chave do dropdownData */}
        {Object.keys(dropdownData).map((label) => (
          <NavItem key={label} label={label} />
        ))}
      </div>
    </nav>
  );
}
