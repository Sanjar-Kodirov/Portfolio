import React from 'react'
import clock from '../img/clock.svg'
import home2 from '../img/home2.png'
const SecvicesSection = () => {
    return (
        <div className="description">
            <div className="services">
                <h2>High <span> quality </span> services.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={home2} alt=""/>
            </div>
        </div>
    )
}

export default SecvicesSection
