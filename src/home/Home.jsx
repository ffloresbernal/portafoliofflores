import React from 'react'
import perfil1 from '../assets/img/Perfil1.jpg';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai';
import background1 from '../assets/img/background1.png';
import { CapsulaBlur,Card2,Card1, HomeBody, HomeHeader, ImgHome } from './Home.component'

export const Home = () => {
  return (
    <div>
        <HomeHeader > 
          <CapsulaBlur>
            <h2>Fernando Flores Bernal</h2>
            <h3><AiOutlineDoubleLeft/> Developer <AiOutlineDoubleRight /></h3>
            <ImgHome src={perfil1}  />
          </CapsulaBlur>
        </HomeHeader>
        <HomeBody>
          <Card1>

          </Card1>
          <Card2>
            <h1>
              Mi nombre es Fernando Flores Bernal
            </h1>
          </Card2>
        </HomeBody>
    </div>
  )
}
