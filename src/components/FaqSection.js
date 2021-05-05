import { AnimateSharedLayout } from 'framer-motion'
import React, {useState} from 'react'
import styled from 'styled-components'
import {About} from '../styles'
import Toggle from './Toggle'
const FaqSection = () => {
    

    return (
        <div>
            <Faq>
                <h2>Any Questions? <span> FAQ </span></h2>
                <AnimateSharedLayout>
                    <Toggle title="How Do I Start?">
                        <div className="question">
                            
                                <div className="answer">
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle title="How Do I Start?">
                        <div className="question">
                            
                                <div className="answer">
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle title="How Do I Start?">
                        <div className="question">
                            
                                <div className="answer">
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                            </div>
                        </div>
                    </Toggle>
                    <Toggle title="How Do I Start?">
                        <div className="question">
                            
                                <div className="answer">
                                <p>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam.</p>
                            </div>
                        </div>
                    </Toggle>
                </AnimateSharedLayout>
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
