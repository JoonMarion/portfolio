/* eslint-disable react/style-prop-object */
import React from 'react';
import './Contacts.css';
import { BiMailSend } from 'react-icons/bi';
import SocialNetworks from './../socialNetworks/SocialNetworks';
import { FaMapPin, FaPhone } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { SiTelegram } from 'react-icons/si';

const Contacts = () => {
    const Contacts = '<Contatos />';
    return (
        <div className="contacts-container" id="contacts">
            <div className="centered session-title">
                <h2 className="content-title">{Contacts}</h2>
                <p className="tertiary">Minhas informações de contato</p>
            </div>
            <div className="contacts-content">
                <div className="contacts">
                    <div>
                        <h2 className="contact-content">
                            <FaPhone size={19} />
                            Telefone
                        </h2>
                        <p>(91) 98843-2057</p>
                    </div>
                    <div>
                        <h2 className="contact-content">
                            <GrMail size={19} />
                            Email
                        </h2>
                        <p>marianojoao52@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="contact-content">
                            <SiTelegram size={19} />
                            Telegram
                        </h2>
                        <a href="https://t.me/JoonMarion" className="link-hover">
                            t.me/joonmarion
                        </a>
                    </div>
                    <div>
                        <h2 className="contact-content">
                            <FaMapPin size={19} />
                            Localização
                        </h2>
                        <p>Castanhal - PA</p>
                    </div>
                    <div className="contacts-social-networks">
                        <SocialNetworks size="25" />
                    </div>
                </div>
                <div className="send-email">
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
                                <button
                                    className="button form-style secondary centered"
                                    type="submit"
                                    disabled="disabled"
                                >
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
