import "./Content3.css";
import a1 from "../../../assets/a1.jpg";
import a2 from "../../../assets/a2.jpg";
import a4 from "../../../assets/a4.jpg";
import a5 from "../../../assets/a5.jpg";

const Content3 = () => {
  return (
    <div className="content3-container" aria-label="Zone de contenu en grille">
      
      <div className="content3-header" tabIndex={0}>
        <h5>Why Use</h5>
        <h2>Why They Prefer CaurisPay</h2>
      </div>

      <div className="content3-stats" tabIndex={0}>
        <p className="stats-value">3K+</p>
        <h3>Businesses already running on CaurisPay</h3>
      </div>

      <div className="content3-feature1" tabIndex={0}>
        <p>Instant withdraw your funds at any time</p>
        <div className="feature1-images">
          <img
            src={a1}
            alt="Illustration de retrait instantané 1"
            className="feature1-image-large"
          />
          <img
            src={a4}
            alt="Illustration de retrait instantané 2"
            className="feature1-image-small"
          />
          <img
            src={a5}
            alt="Illustration de retrait instantané 3"
            className="feature1-image-large-rounded"
          />
        </div>
      </div>

      <div className="content3-feature2" tabIndex={0}>
        <div className="content-txt1">
          <p>No asset volatility</p>
          <h3 className="feature2-text">
            Generate returns on your cash reserves without making any investments.
          </h3>
        </div>
        <img
          src={a2}
          alt="Illustration de stabilité des actifs"
          className="feature2-image"
        />
      </div>
    </div>
  );
};

export default Content3;
