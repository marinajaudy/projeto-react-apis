import styled from "styled-components";
import pokebolaBackground from '../../assets/pokebolaFundoCard.png'

export const InfoCard = styled.div`
    border: 2px solid black;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-image: url(${pokebolaBackground});
    background-repeat: no-repeat;
    background-position: -7vw 0vh;
    background-size: 50vw 90vh;
    margin-right: -20px;
    z-index: 4;

    h3{
        font-size: 16px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        line-height: 19px;
        position: absolute;
        height: 19px;
        top: 25px;
        font-style: normal;
    }

    h2{
        position: absolute;
        height: 39px;
        top: 40px;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 39px;
    }
`
export const TypeCard =  styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: 89px;
    gap: 16px;
`