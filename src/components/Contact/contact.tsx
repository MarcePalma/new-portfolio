import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="contact-page">
            <h1 className="text-white">Contacto</h1>
            <p className="text-white">Si tienes alguna pregunta o deseas ponerte en contacto, por favor completa el formulario a continuación.</p>
            <ContactForm />
            <style jsx>{`
                .contact-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 40px;
                    background-color: #1e1e1e;
                    color: #fff;
                }

                h1 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                    font-family: 'Outfit', sans-serif;
                }

                p {
                    font-size: 1.2rem;
                    margin-bottom: 40px;
                    text-align: center;
                    max-width: 600px;
                }
            `}</style>
        </div>
    );
};

export default Contact;