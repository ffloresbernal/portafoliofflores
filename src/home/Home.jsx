import React from "react";
import perfil1 from "../assets/img/Perfil1.jpg";
import tecnologias from '../assets/img/Tecnologias.png'
import teamwork from '../assets/img/Teamwork.png'
import aprendizaje from '../assets/img/Aprendizaje.png'

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import {
  CapsulaBlur,
  Card2,
  Header1,
  HomeBody,
  HomeHeader,
  ImgHome,
  ImgCards,
  TextCard
} from "./Home.component";





export const Home = () => {
  return (
    <div>
      <IconContext.Provider value={{ style: { fontSize: "2rem", marginTop:"10px" } }}>
        <HomeHeader>
          <CapsulaBlur>
            <h2>Fernando Flores Bernal</h2>
            <ImgHome src={perfil1} />
            <h3>  <AiOutlineDoubleLeft /> Developer <AiOutlineDoubleRight /> </h3>            
          </CapsulaBlur>
        </HomeHeader>
          <Header1>Me caracterizo por:</Header1>       
        <HomeBody>
          <Card2>
            <ImgCards src={tecnologias} />
          </Card2>
          <Card2>
            <ImgCards src={aprendizaje} />
          </Card2>
          <Card2>
            <ImgCards src={teamwork} />
          </Card2>
        </HomeBody>        
      </IconContext.Provider>
    </div>
  );
};
