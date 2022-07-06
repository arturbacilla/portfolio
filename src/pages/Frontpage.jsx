import React from 'react';
import { ReactComponent as Me } from '../assets/dev_me.svg';

function Frontpage() {
  return (
    <main>
      <section className="presentation-text">
        <p className="bold-paragraph">
          Oi, eu sou o Artur.
          Eu sou Desenvolvedor Web Fullstack e Engenheiro Mecânico
        </p>
        <p>
          Esse site está em desenvolvimento
          para me apresentar e mostrar um pouco das minhas habilidades.
        </p>
      </section>
      <Me className="landing-img" />
    </main>
  );
}

export default Frontpage;
