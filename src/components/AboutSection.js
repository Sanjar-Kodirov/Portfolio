import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'



const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div  className="hide">
                    <h2>your <span> dreams </span> come </h2>
                    </div>
                    <div  className="hide">
                    <h2>true</h2>
                    </div>
                    <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills to help you achieve it.</p>
                    <button>Contact us</button>
                </div>   
                {/* end of the title */}      
            </Description>
            <Image>
                <img src={home1} alt=""/>
            </Image> 
        </About>
    )
}

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
`
const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        min-height: 80vh;
        object-fit: cover;
    }
    
`

export default AboutSection
