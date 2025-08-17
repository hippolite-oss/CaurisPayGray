
import "./Content1.css";
import payImage from "../../assets/pay.jpg";

const Content1 = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="side left">
          <p className="highlight-text">Get paid early. Save automatically all your pay.</p>
          <h6 className="subtext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est harum ut providen?</h6>
          <form className="email-form">
            <input 
              type="email" 
              placeholder="Your business email" 
              required 
              className="email-input"
            />
            <button type="submit" className="btn-get-started">Get started </button>
          </form>
        </div>
        <div className="side right">
          <img src={payImage} alt="Payment illustration" width={550} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Content1;
