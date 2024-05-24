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

            <button className='btn btn--primary w-full bg-[#655FDF] hover:bg-[#3A45EF] rounded-full py-2 px-4 mt-8 text-center transition-all duration-300 hover:scale-105' type="submit">Enviar</button>
            <style jsx>{`
                .contact-form {
                    color:#fff;
                    max-width: 600px;
                    width: 100%;
                    background-color: #2e2e2e;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: bold;
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
                }

                textarea {
                    height: 150px;
                }

                input:focus,
                textarea:focus {
                    outline: none;
                    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
                    border: 1px solid rgba(81, 203, 238, 1);
                }

                button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </form>
    );
};

export default ContactForm;