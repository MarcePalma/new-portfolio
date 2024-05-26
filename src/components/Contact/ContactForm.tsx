import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Enviar</button>
            <style jsx>{`
                .contact-form {
                    max-width: 600px;
                    width: 100%;
                    background-color: rgba(46, 46, 46, 0.9);
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: bold;
                    color: #fff;
                }

                input[type='text'],
                input[type='email'],
                textarea {
                    width: 100%;
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    background-color: #3e3e3e;
                    color: #fff;
                    font-size: 1rem;
                    outline: none;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                input:focus,
                textarea:focus {
                    outline: none;
                    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
                    border: 1px solid rgba(81, 203, 238, 1);
                }

                textarea {
                    height: 150px;
                }

                button {
                    display: inline-block;
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    padding: 12px 24px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                button:hover {
                    background-color: #0056b3;
                    transform: scale(1.05);
                }
            `}</style>
        </form>
    );
};

export default ContactForm;
