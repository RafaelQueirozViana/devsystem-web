import React, { useEffect, useState } from "react";
import "../Styles/Pessoas.scss";
import axios from "axios";

export default function Pessoas() {
  const [pessoas, setPessoas] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function buscarPessoas() {
      const response = await axios.get("http://localhost:3000/pessoas");
      setPessoas(response.data);
    }

    buscarPessoas();
  }, []);

  // Configuração da página
  const itensPorPagina = 6;

  // Calcula o indice inicial dos registros da página atual
  const inicio = (pagina - 1) * itensPorPagina;

  // Calcula o índice inicial dos registros da página atual
  const fim = inicio + itensPorPagina;

  // Separa os registros que serão exibidos na página atual
  const pessoasPagina = pessoas.slice(inicio, fim);

  // Calcula a quantidade total de paginas
  const totalPagina = Math.ceil(pessoas.length / itensPorPagina);

  return (
    <main className="container pessoas">
      <h1>Lista de pessoas</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {pessoasPagina.map(({ id, nome, email, telefone }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{email}</td>
              <td>{telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section>
        <button onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
          Anterior
        </button>
        <span>
          {" "}
          {pagina} de {totalPagina}{" "}
        </span>
        <button
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPagina}
        >
          Próximo
        </button>
      </section>
    </main>
  );
}
