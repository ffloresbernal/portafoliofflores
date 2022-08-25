import React from "react";
import perfil1 from "../assets/img/Perfil1.jpg";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import background1 from "../assets/img/background1.png";
import { IconContext } from "react-icons";
import {
  CapsulaBlur,
  Card2,
  Header1,
  Card1,
  HomeBody,
  HomeHeader,
  ImgHome,
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
          <Header1>Mi nombre es Fernando Flores</Header1>       
        <HomeBody>
          <Card2>
            <p>hola</p>
          </Card2>
          <Card2>
            <p>hola</p>
          </Card2>
          <Card2>
            <p>hola</p>
          </Card2>
        </HomeBody>
      </IconContext.Provider>
    </div>
  );
};
