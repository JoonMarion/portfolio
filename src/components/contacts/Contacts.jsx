/* eslint-disable react/style-prop-object */
import React from 'react';
import './Contacts.css';
import { BiMailSend } from 'react-icons/bi';
import SocialNetworks from './../socialNetworks/SocialNetworks';

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
                        <p>(91) 98843-2057</p>
                    </div>
                    <div>
                        <h2>Email</h2>
                        <p>marianojoao52@gmail.com</p>
                    </div>
                    <div>
                        <h2>Telegram</h2>
                        <a href="https://t.me/JoonMarion" className="link-hover">
                            t.me/joonmarion
                        </a>
                    </div>
                    <div>
                        <h2>Localização</h2>
                        <p>Castanhal - PA</p>
                    </div>
                    <div className="contacts-social-networks">
                        <SocialNetworks size="25" />
                    </div>
                </div>
                <div className="send-email">
                    <h2 className="send-email-title">Me envie um email</h2>
                    <form action="https://formsubmit.co/marianojoao52@gmail.com" className="form" method="POST">
                        <ul className="forms">
                            <li className="form-content">
                                <label for="name" className="form-label secondary">
                                    Digite seu nome
                                </label>
                                <input className="input form-style" type="text" name="name" required />
                            </li>
                            <li className="form-content">
                                <label for="email" className="form-label secondary">
                                    Digite um email válido
                                </label>
                                <input className="input form-style" type="text" name="email" required />
                            </li>
                            <li className="form-content">
                                <label for="message" className="form-label secondary">
                                    Digite o título da mensagem
                                </label>
                                <input type="text" name="_subject" className="input form-style" required />
                            </li>
                            <li className="form-content">
                                <label for="message" className="form-label secondary">
                                    Digite sua mensagem
                                </label>
                                <textarea className="textarea form-style" name="message" required />
                            </li>
                            <li className="form-content form-button">
                                <button className="button form-style secondary centered" type="submit">
                                    {' '}
                                    Enviar
                                    <BiMailSend size={20} className="margin-icon secondary" />
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
