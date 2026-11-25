import React, { useEffect, useState } from "react";
import "../Styles/Pessoas.scss";
import axios from "axios";

export default function Pessoas() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function buscarPessoas() {
      const response = await axios.get("http://localhost:3000/pessoas");
      setPessoas(response.data);
    }

    buscarPessoas();
  }, []);

  console.log(pessoas);

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
          {pessoas.map((pessoa) => (
            <tr key={pessoa}>
              <td>{pessoa.id}</td>
              <td>{pessoa.nome}</td>
              <td>{pessoa.email}</td>
              <td>{pessoa.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
