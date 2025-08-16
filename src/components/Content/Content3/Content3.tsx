import React from "react";
import "./Content3.css";

const Content3: React.FC = () => {
  return (
    <section className="parent" aria-label="Zone de contenu en grille">
      <article className="div1" tabIndex={0} aria-describedby="desc1">
        <h5>WHY USE</h5><br />
        <h2>Why their prefer CaurisPay</h2>
      </article>
      <article className="div2" tabIndex={0} aria-describedby="desc2">
        3K+ <br />
        <h3>Business only already running on CaurPay  </h3>
      </article>
      <article className="div3" tabIndex={0} aria-describedby="desc3">
        Instant withdraw your funds at anny times
      </article>
      <article className="div4" tabIndex={0} aria-describedby="desc4">
        No assets violatility
      </article>
    </section>
  );
};

export default Content3;
