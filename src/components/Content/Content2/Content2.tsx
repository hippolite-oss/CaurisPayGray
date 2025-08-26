import "./Content2.css";
import { useEffect, useRef } from "react";


const Content2 = () => {
  const boxRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    boxRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      boxRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="content2-container">
      <h4>Future Payment</h4>
      <div className="top-row">
        <div className="box box1">
          <h2>Experience That Grows with Your Scale</h2>
        </div>
        <div className="box box2">
          Design a financial operating system that works for your business and streamlines cashflow management.
        </div>
      </div>
      <div className="bottom-row">
        <div className="box box3" ref={boxRefs[0]}>
          <h3>Financial Efficiency</h3>
          <p>Create a financial experience and automate repeat purchases by scheduling recurring payments</p>
        </div>
        <div className="box box4" ref={boxRefs[1]}>
          <h3>Multiple account</h3>
          <p>Run your operations with cach from your account and generate yield om funds stored in your account.</p>
        </div>
        <div className="box box5" ref={boxRefs[2]}>
          <h3>Unmatched security</h3>
          <p>Security manage your finances with organization-wide MFA, card-locking, and account-level controls.</p>
        </div>
      </div>
    </div>
  );
};

export default Content2;