import "./Content3.css";


const Content3 = () => {
  return (
    <section className="parent" aria-label="Zone de contenu en grille">
      {/* Bloc titre principal */}
      <article className="div1" tabIndex={0}>
        <h5>Why Use</h5>
        <h2>Why They Prefer CaurisPay</h2>
      </article>

      {/* Statistique */}
      <article className="div2" tabIndex={0}>
        <p className="stat-value">3K+</p>
        <h3>Businesses already runing on CaurisPay</h3>
      </article>

      {/* Instant withdraw */}
      <article className="div3" tabIndex={0}>
        <p>Instant withdraw your funds at any time</p>
        <img src="./assets/a1.jpg" alt="Illustration withdrawal" />
      </article>

      {/* No volatility */}
      <article className="div4" tabIndex={0}>
        <p>No asset volatility</p>
        <img src="." alt="Illustration stability" />
      </article>
    </section>
  );
};

export default Content3;
