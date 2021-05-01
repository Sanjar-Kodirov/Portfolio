import React from 'react'
import styled from 'styled-components'
import {About} from '../styles'
const FaqSection = () => {
    return (
        <div>
            <Faq>
                <h2>Any Questions? <span> FAQ </span></h2>
                <div className="question">
                    <h4>How Do I Start?</h4>
                    <div className="faq-line"></div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                    </div>
                </div>
                <div className="question">
                    <h4>How Do I Start?</h4>
                    <div className="faq-line"></div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                    </div>
                </div>
                <div className="question">
                    <h4>How Do I Start?</h4>
                    <div className="faq-line"></div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                    </div>
                </div>
                <div className="question">
                    <h4>How Do I Start?</h4>
                    <div className="faq-line"></div>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                    </div>
                </div>
            </Faq>
        </div>
    )
}

const Faq = styled(About)`
   display: block;
   span{
       display: block;
   }
   h2{
       padding-bottom: 2rem;
       color: #fff;
       font-weight: lighter;
   }
   h4{
       color: #fff;
       margin-bottom: 1rem;
       font-size: 2rem;
   }
   .faq-line{
       width: 100%;
       height: 5px;
       background: #fff;
   }
   .question{
       padding: 2rem 0rem;
       cursor: pointer;
   }
   .answer{
       padding: 2rem 0rem;
       p{
           padding: 1rem 0rem;
       }
   }
`

export default FaqSection
