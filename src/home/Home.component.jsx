import styled from "styled-components";

export const MobileIcon = styled.div`
    margin-top:2%;
    margin-left: 2%;
    color: #ea0000;
    fill: #ea0000;
    cursor: pointer;
    z-index: 1;
    width:30px;
`

export const Jueguito = styled.div`
    background-color: #f6f7d4;
    padding: 0%;
    position:absolute;
    width:1350px;
    top:75px;
    left:${({open})=> open ? "0" : "-110%" };
    height:80vh;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    transition:0.4s all ease;
    z-index: 0;
    @media screen and (max-width:1162px){
        width: 550px;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        transition:0.4s all ease;
        z-index: 1;
    }
    @media screen and (max-width:722px){
        width: 550px;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        transition:0.4s all ease;
        z-index: 1;
    }
`
export const Contenido = styled.div`
    z-index: -100;
`
export const Divcpu = styled.div`
    display: flex;
    background: red;
    margin: 2%;
    padding: 10px;
    align-items: center;
    justify-content: center;
`
export const TableCPU = styled.table`
    background-color: aqua;
    flex:1;
`

export const Tablecell = styled.td`
    background-color: white;
    margin: 0;
    padding: 2%;
`
export const EspacioDado = styled.td`
    margin-left: 2%;
    background-color: grey;
    flex:1;
`
export const DivPlayer = styled.div`
    display: flex;
    background: red;
    margin: 2%;
    padding: 10px;
    align-items: center;
    justify-content: center;
`
export const TablePlayer = styled.table`
    background-color: aqua;
    flex:1;
`
export const Avatar = styled.div`
    margin :10px;
    background-color: blueviolet;
    flex:1;

`
export const HomeHeader = styled.div`
    align-items: center;
    text-align: center;
`