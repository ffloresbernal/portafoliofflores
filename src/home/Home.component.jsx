import styled from "styled-components";
import background1 from '../assets/img/background1.png';

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
    background-color: #8a2be2;
    flex:1;

`
export const HomeHeader = styled.div`
    align-items: center;
    text-align: center;
    background: url(${background1});    
    font-size: 25px;
    color:white;
    
`
export const HomeBody = styled.div`
    padding: 3%;
    display: flex;
    justify-content: center;
    @media screen and (max-width:1162px) {
        flex-flow: column;
    }

    @media screen and (max-width:722px) {
        flex-flow: column;
    }
`

export const CapsulaBlur = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(6px);
    padding-bottom: 5px;
    h2{
        margin-top: 0px;
        padding-top: 15px;
        font-family:'Barlow', sans-serif;
    }
    svg{
        margin: 0px 0px -8px;
    }
`

export const Card1 = styled.div`
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0; 
    flex:1;
    margin-right:50px;
    color: white;

    @media screen and (max-width:1162px) {
        align-items: center;
        margin: 0;
        padding: 0; 
        text-align: center;
        flex-flow: column;
    }

    @media screen and (max-width:722px) {
        align-items: center;
        text-align: center;
        margin: 0;
        padding: 0; 
        flex-flow: column;
    }
`
export const Card2 = styled.div`
    background: #f5f5f5;
    margin:auto;
    color: white;
    padding: 0px 10px 0px 10px ;
    font-size: 17px;
    font-weight: 700;
    box-shadow: 1px 2px 20px 1px rgb(192 98 255);
    margin :30 px;
    border-radius: 15px;
    cursor: pointer;
    transition: 200ms all;
    &:hover{
        transform: scale(1.1,1.1);
    }

    @media screen and (max-width:1162px) {
        box-shadow: 1px 2px 20px 1px rgb(192 98 255);
        margin: 30px;
        border-radius: 15px;
    }

    @media screen and (max-width:722px) {
        padding: 15px; 
        margin : 30px;
        box-shadow: 1px 2px 20px 1px rgb(192 98 255);
        border-radius: 15px;
    }
`
export const ImgHome = styled.img`
    padding: 0;
    height:200px;
    margin-bottom: 0;
    border-radius: 36%;
`
export const Header1 = styled.h1`
    padding:4px;
    margin-left:20px;
`
export const ImgCards = styled.img`
    padding-top: 7px;
    padding-bottom: 7px;
    height:250px;
    margin-bottom: 0;

    @media screen and (max-width:450px){
        height:214px;
    }
    @media screen and (max-width:392px){
        height:200px;
    }
`
export const TextCard = styled.h5`
    color: #8a2be2;
`