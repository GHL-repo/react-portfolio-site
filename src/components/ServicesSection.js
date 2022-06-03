import React from 'react';

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

import home2 from '../img/home2.png';

const ServicesSection = () => {
    return (
        <div classNameName="services">
            <h2>High <span>quality</span> services</h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={clock}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Adipisicing placeat fugit sed reiciendis obcaecati?</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Adipisicing placeat fugit sed reiciendis obcaecati?</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={money}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Adipisicing placeat fugit sed reiciendis obcaecati?</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={teamwork}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Adipisicing placeat fugit sed reiciendis obcaecati?</p>
                </div>
                <div className="image">
                    <img src={home2}/>
                </div>
            </div>
        </div>
    )
};

export default ServicesSection;
