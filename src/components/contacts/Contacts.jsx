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
                        <input className="input form-style" type="text" placeholder="Digite seu nome" />

                        <input className="input form-style" type="text" placeholder="Digite seu email" />

                        <textarea className="textarea form-style" placeholder="Digite sua mensagem..." />

                        <input className="button form-style" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
