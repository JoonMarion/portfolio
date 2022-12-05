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
                    <h2>Me envie um email</h2>
                    <form className="form" onSubmit={() => {}}>
                        <ul>
                            <li>
                                <label for="name">Name</label>
                                <input className="input form-style" type="text" name="name" />
                                <span>Digite seu nome e sobrenome</span>
                            </li>
                            <li>
                                <label for="email">Email</label>
                                <input className="input form-style" type="text" name="email" />
                                <span>Digite um email válido</span>
                            </li>
                            <li>
                                <label for="message">Mensagem</label>
                                <textarea className="textarea form-style" name="message" />
                                <span>Digite sua mensagem</span>
                            </li>
                            <li>
                                <input className="button form-style" type="submit" value="Enviar" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
