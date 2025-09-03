import React from 'react';
import '../styles/contact.css'; 

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="card contact-card">
          <h2>📬 Contact Me</h2>
          <p> I am always ready for opportunities and collaborations. You can join me here:</p>

          <div className="contact-info">
            <div className="info-box">
              <span className="label">📞 Téléphone :</span>
              <span className="value">+221 77 720 31 62</span>
            </div>
            <div className="info-box">
              <span className="label">📧 Email :</span>
              <span className="value">contact@dasylva.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

