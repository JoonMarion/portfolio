import React from 'react';
import './Contacts.css';

const Contacts = () => {
    const Contacts = '<Contatos />';
    return (
        <div className="contacts-container" id="contacts">
            <div className="centered">
                <h2 className="content-title">{Contacts}</h2>
            </div>
            <div className="contacts-content">
                <div className="contacts">
                    <div>
                        <h2>Telefone</h2>
                        <p>91 988432057</p>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <p>marianojoao52@gmail.com</p>
                    </div>
                    <div>
                        <h2>Telegram</h2>
                        <a href="t.me/JoonMarion">t.me/joonmarion</a>
                    </div>
                    <div>
                        <h2>Localização</h2>
                        <p>Castanhal - PA</p>
                    </div>
                </div>
                <div className="send-email">
                    <h2 className="send-email-title">Me envie um email</h2>
                    <form className="form" onSubmit={() => {}}>
                        <ul className="forms">
                            <li className="form-content">
                                <label for="name" className="form-label secondary">
                                    Digite seu nome
                                </label>
                                <input className="input form-style" type="text" name="name" />
                            </li>
                            <li className="form-content">
                                <label for="email" className="form-label secondary">
                                    Digite um email válido
                                </label>
                                <input className="input form-style" type="text" name="email" />
                            </li>
                            <li className="form-content">
                                <label for="message" className="form-label secondary">
                                    Digite sua mensagem
                                </label>
                                <textarea className="textarea form-style" name="message" />
                            </li>
                            <li className="form-content form-button">
                                <input className="button form-style secondary" type="submit" value="Enviar" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
