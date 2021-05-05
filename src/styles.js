import styled from 'styled-components'
export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;
`
export const Description = styled.div`
    flex: 1;
    z-index: 2;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img{
        width: 100%;
        min-height: 80vh;
        object-fit: cover;
    }
    
`
