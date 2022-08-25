import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:70px;
    background-color:rgb(95, 28, 134);
`
export const Wrapper = styled.div`
    width:100%;
    max-width:1300px;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:auto;
`
export const LogoContainer = styled.div`
    margin-left:0.5rem;
    display:flex;
    align-items:center;
    font-size:1.2rem;
    font-family:sans-serif;   
    p{
        &:nth-child(3){
            color:rgb(255, 255, 255);
            margin-top:15px;
            margin-left:5px;
            padding:0.5rem;
        }
    } 
    svg{
        color:rgb(255, 255, 255);
    }
`
export const Menu = styled.ul`
    height:30px;
    display:flex;
    justify-content:flex-end;
    list-style:none;

    @media screen and (max-width:1162px){
        background-color: rgb(71, 18, 102);
        padding: 0;
        margin: 0;
        position:absolute;
        width:100%;
        top:65px;
        left:${({open})=> open ? "0" : "-110%" };
        height:55vh;
        flex-direction:column;
        align-items:center;
        z-index: 1;
        justtify-content:center;
        transition:0.4s all ease;
    }
`
export const MenuItem = styled.li`
    height:100%;
    width: 100%;
    margin: 5px;
    padding: 0px 30px  0px 30px;

    @media screen and (max-width:1162px){
        width:100%;
        height:45vh;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content:center;
        align-items:center;
    }
    
`
export const MenuItemLink = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100%;
    padding:0.5rem 2.5rem;
    text-decoration:none;
    color:rgb(255, 255, 255);
    font-size: 1rem;
    font-weight:400;
    cursor:pointer;
    transition: 0.5s all ease;    

    &:hover{
        color:#fff;
        width: 100%;
        background-color:rgb(71, 18, 102);
        
    }

    @media screen and (max-width:1162px){
        width: 100%;
        margin: 0;
        padding: 0;
    }
`
export const MobileIcon = styled.div`
    display:none;


    @media screen and (max-width:1162px){
        display:flex;
        align-items:center;
        cursor:pointer;
        margin-right:0.5rem;

        svg{
            color:rgb(255, 255, 255);
        }
    }
`