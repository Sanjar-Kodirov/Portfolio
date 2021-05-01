import React from 'react'
import styled from 'styled-components'
import clock from '../img/clock.svg'
import home2 from '../img/home2.png'
import {About, Description, Image} from '../styles.js'
const SecvicesSection = () => {
    return (
        <Services >
            <Description>
            <div className="services">
                <h2>High <span> quality </span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </div>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </Services>
        
    )
}

const Services = styled(About)`
   h2{
      padding-bottom: 5rem;
   }
   p{
       padding: 0.5rem;
   }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  .icon{
      display: flex;
      align-items: center;
      h3{
          padding: 1rem;
      }
  }
`
export default SecvicesSection
