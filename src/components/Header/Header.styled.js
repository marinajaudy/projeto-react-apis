import styled from "styled-components";

export const ContainerHeader = styled.header`
    border: 2px solid yellow;
    height: 18vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    div{
        display: flex;
        
    }

    img{
        grid-column: 2/3;
    }


`
