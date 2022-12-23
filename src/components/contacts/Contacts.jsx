/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/style-prop-object */
import React from 'react';
import './Contacts.css';
import { BiMailSend } from 'react-icons/bi';
import SocialNetworks from './../socialNetworks/SocialNetworks';
import { FaMapPin, FaPhone } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { SiTelegram } from 'react-icons/si';

const Contacts = () => {
    const Contacts = 'Contatos';
    return (
        <div className="contacts-container" id="contacts">
            <div className="centered session-title">
                <h2 className="content-title">{Contacts}</h2>
                <p className="secondary">Minhas Informações de Contato</p>
            </div>
            <div className="contacts-content">
                <div className="contacts-wrapper">
                    <div className="contacts-info">
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
                            <a href="https://t.me/JoonMarion" className="link-hover" target="_blank" rel="noreferrer">
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
                    </div>
                    <div className="contacts-social-networks">
                        <SocialNetworks
                            size="25"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        />
                    </div>
                </div>
                <div className="send-email">
                    <form action="https://formsubmit.co/marianojoao52@gmail.com" className="form" method="POST">
                        <ul className="forms">
                            <li className="form-content">
                                <label htmlFor="name" className="form-label secondary">
                                    Digite seu nome
                                </label>
                                <input className="input form-style" type="text" name="name" required />
                            </li>
                            <li className="form-content">
                                <label htmlFor="email" className="form-label secondary">
                                    Digite um email válido
                                </label>
                                <input className="input form-style" type="text" name="email" required />
                            </li>
                            <li className="form-content">
                                <label htmlFor="message" className="form-label secondary">
                                    Digite o título da mensagem
                                </label>
                                <input type="text" name="_subject" className="input form-style" required />
                            </li>
                            <li className="form-content">
                                <label htmlFor="message" className="form-label secondary">
                                    Digite sua mensagem
                                </label>
                                <textarea className="textarea form-style" name="message" required />
                            </li>
                            <li className="form-button-content centered">
                                <button className="button-43 send-mail-button" role="button" type="submit">
                                    <p className="centered">
                                        Enviar
                                        <BiMailSend size={20} className="margin-icon send-email-icon secondary" />
                                    </p>
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
