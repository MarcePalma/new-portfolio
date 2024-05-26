import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contacto</h1>
            <p>Si tienes alguna pregunta o deseas ponerte en contacto, por favor completa el formulario a continuación.</p>
            <ContactForm />
            <style jsx>{`
                .contact-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 40px;
                    background: linear-gradient(135deg, #1e1e1e 30%, #121212 100%);
                    color: #fff;
                    min-height: 100vh;
                    position: relative;
                    overflow: hidden;
                }

                h1 {
                    font-size: 3rem;
                    margin-bottom: 20px;
                    font-family: 'Outfit', sans-serif;
                    color: #fff;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }

                p {
                    font-size: 1.2rem;
                    margin-bottom: 40px;
                    text-align: center;
                    max-width: 600px;
                    color: #ddd;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                }

                .background-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }

                .background-elements div {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    opacity: 0.1;
                    animation: float 20s infinite ease-in-out;
                }

                @keyframes float {
                    0% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                    100% {
                        transform: translateY(0) rotate(360deg);
                    }
                }

                .circle1 {
                    width: 150px;
                    height: 150px;
                    top: 20%;
                    left: 15%;
                    animation-duration: 25s;
                }

                .circle2 {
                    width: 250px;
                    height: 250px;
                    top: 60%;
                    left: 70%;
                    animation-duration: 30s;
                }

                .circle3 {
                    width: 100px;
                    height: 100px;
                    top: 80%;
                    left: 20%;
                    animation-duration: 35s;
                }
            `}</style>
            <div className="background-elements">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
        </div>
    );
};

export default Contact;