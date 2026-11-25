import React from "react";
import "../Styles/Pessoas.scss";

export default function Pessoas() {
  return (
    <main className="container pessoas">
      <h1>Lista de pessoas</h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>444</td>
            <td>Juliana Silva</td>
            <td>juliana@hotmain.com</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
