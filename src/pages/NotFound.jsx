import React from 'react';
import './NotFound.css';
import { ReactComponent as MeGliteched } from '../assets/404.svg';

function NotFound() {
  return (
    <main className="bg-404">
      <section className="presentation-text">
        <p className="bold-paragraph">
          Algo de errado não está certo!
        </p>
        <p>
          Vamos voltar para a página inicial
        </p>
      </section>
      <MeGliteched className="landing-img" />
    </main>
  );
}

export default NotFound;
