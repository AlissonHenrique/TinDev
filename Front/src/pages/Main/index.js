import React, { useEffect } from "react";

import "./styles.css";
import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
///match pega parametro da rota
export default function Main({ match }) {
  //toda vez que o id for alterado
  useEffect(() => {}, [match.params.id]);
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars0.githubusercontent.com/u/17318431?v=4"
            alt=""
          />
          <footer>
            <strong>Alisson Henrique</strong>
            <p>Programador e cantor sertanejo nos tempos livres</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
