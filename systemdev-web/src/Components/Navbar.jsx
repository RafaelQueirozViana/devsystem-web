import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.scss";

export default function Navbar() {
  const logado = sessionStorage.getItem("logado");
  return (
    <nav>
      <section className="container">
        {/* <Link to="/">Login</Link> */}
        {logado !== "true" && (
          <>
            <Link to="/">Login</Link>
          </>
        )}
        <Link to="/sobre">Sobre</Link>

        {logado === "true" && (
          <>
            <button>Sair</button>
          </>
        )}
      </section>
    </nav>
  );
}
