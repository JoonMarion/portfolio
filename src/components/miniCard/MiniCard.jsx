import React from 'react';
import './MiniCard.css';

const MiniCard = () => {
    return (
        <div className="mini-card-container">
            <div className="mini-card">
                <div className="content-text secondary">
                    <p className="mini-card-text">
                        &#123;"desenvolvedor":
                        <br />
                        &emsp;&#123;
                        <br />
                        &emsp;&emsp;<span className="key">"nome"</span>: <span className="value">"João"</span>,
                        <br />
                        &emsp;&emsp;<span className="key">"sobrenome"</span>: <span className="value">"Mariano"</span>
                        ,
                        <br />
                        &emsp;&emsp;<span className="key">"idade"</span>: <span className="number-value">21</span>
                        ,
                        <br />
                        &emsp;&emsp;<span className="key">"classe"</span>: <span className="value">"Front-end"</span>
                        ,
                        <br />
                        &emsp;&#125;,
                        <br />
                        &#125;,
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MiniCard;
