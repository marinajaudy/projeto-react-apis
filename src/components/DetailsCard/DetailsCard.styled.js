import styled from "styled-components";
import pokebolaBackground from '../../assets/fundoPokebolaDetalhes.png'

export const InfoCard = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${pokebolaBackground});
    background-repeat: no-repeat;
    background-position: -6vw 0;
    margin-right: -20px;
    padding-left: 50px;
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

// export const StatsStyle = styled.div`
//     border: 2px solid yellow;
//     width: 307px;
//     display: grid;
//     justify-items: flex-start;
//     align-items: flex-start;
//     grid-template-columns: 2fr 1fr 2fr;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 400;

//     p{
//     color: gray;
//     grid-column: 1/2;
//     }

//     span{
//         grid-column: 2/3;
//     }
    
// `
export const ContainerInfoPokemon = styled.div`
        border: 2px solid red;
        width: 100%;
        height: 20vh;
        display: flex;
`