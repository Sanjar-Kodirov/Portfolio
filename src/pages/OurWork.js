import React from 'react'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h1>The racer</h1>
                <div className="line"></div>
                <Link to="/ourwork/the-athlete"><img alt="Img" src={athlete}/></Link> 
            </Movie>
            <Movie>
                <h1>The racer</h1>
                <div className="line"></div>
                <Link to="/ourwork/the-racer"><img alt="Img" src={theracer}/></Link> 
            </Movie>
            <Movie>
                <h1>The racer</h1>
                <div className="line"></div>
                <Link to="/ourwork/good-times"><img alt="Img" src={goodtimes}/></Link> 
            </Movie>
        </Work>
    )
}
const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    color: #fff;
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        width: 100%;
        height: 0.3rem;
        background: #cccccc;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
export default OurWork
