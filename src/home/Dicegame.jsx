import React,{useState} from 'react';
import {FaDice, FaTimes,FaCookieBite,FaDiceFive,
        FaDiceFour,FaDiceOne,FaDiceSix,
        FaDiceThree,FaDiceTwo} from 'react-icons/fa';
import { IconContext } from 'react-icons'
import { Jueguito, MobileIcon,
        Divcpu,Avatar,TableCPU,TablePlayer,
        Tablecell,EspacioDado, DivPlayer } from './Home.component';
import { GiRollingDices } from "react-icons/gi";

export const Dicegame = () => {
  const [popup, setpopup] = useState(false);
  const [dadoCPU, setDadoCPU] = useState(1);

  function randomNumero(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
  }
  
  function turnoCpu(booleano){
    
  }

  return (
    <div>      
      {/* juego de los daditos */}
      <IconContext.Provider value={{style:{ fontSize:"2rem"} }} >
        <MobileIcon onClick={()=> setpopup(!popup)}>
          {popup ? <FaTimes /> : <FaDice />  }
        </MobileIcon>
        <br></br>

        <Jueguito open={popup}>
        <MobileIcon onClick={()=> setpopup(!popup)}>
          {popup ? <FaTimes /> : <FaDice />  }
        </MobileIcon>
          <h1> Dice Game </h1>
          
          <Divcpu>
            <Avatar>
              <h1>AVATAR CPU</h1>
            </Avatar>
            <TableCPU>
                <theader>{/* sumas de puntaje */}
                  <tr>
                    <th colSpan={3}>CPU</th>
                  </tr>
                  <tr>
                    <th id='suma1'>1</th>{/* es la suma de 0.0+ 0.1 + 0.2 */}
                    <th id='suma2'>2</th>{/* es la suma de 1.0+ 1.1 + 1.2 */}
                    <th id='suma3'>3</th>{/* es la suma de 2.0+ 2.1 + 2.2 */}
                  </tr>
                </theader>
                <tbody>
                  <tr>
                    <Tablecell id='arregloCPU [0,0]'>1</Tablecell>
                    <Tablecell id='arregloCPU [1,0]'>2</Tablecell>
                    <Tablecell id='arregloCPU [2,0]'>3</Tablecell>
                  </tr>
                  <tr>
                    <Tablecell id='arregloCPU [0,1]'>1</Tablecell>
                    <Tablecell id='arregloCPU [1,1]'>2</Tablecell>
                    <Tablecell id='arregloCPU [2,1]'>3</Tablecell>
                  </tr>
                  <tr>
                    <Tablecell id='arregloCPU [0,2]'>1</Tablecell>
                    <Tablecell id='arregloCPU [1,2]'>2</Tablecell>
                    <Tablecell id='arregloCPU [2,2]'>3</Tablecell>
                  </tr>
                </tbody>
            </TableCPU>
            <EspacioDado>
              <h5>Resultado : {dadoCPU.toString()}</h5>
              <GiRollingDices onClick={()=>setDadoCPU(randomNumero(1,6))} />
            </EspacioDado>
          </Divcpu>

          <DivPlayer>
            
            <EspacioDado>
              <h5>Resultado : </h5>
            </EspacioDado>
            <TablePlayer>
            <theader>{/* sumas de puntaje */}
                  <tr>
                    <th colSpan={3}>CPU</th>
                  </tr>
                  <tr>
                    <th id='suma1'>1</th>{/* es la suma de 0.0+ 0.1 + 0.2 */}
                    <th id='suma2'>2</th>{/* es la suma de 1.0+ 1.1 + 1.2 */}
                    <th id='suma3'>3</th>{/* es la suma de 2.0+ 2.1 + 2.2 */}
                  </tr>
                </theader>
                <tbody>
                  <tr>
                    <Tablecell id='arregloCPU [0,0]'>1</Tablecell>
                    <Tablecell id='arregloCPU [1,0]'>2</Tablecell>
                    <Tablecell id='arregloCPU [2,0]'>3</Tablecell>
                  </tr>
                  <tr>
                    <Tablecell id='arregloCPU [0,1]'>1</Tablecell>
                    <Tablecell id='arregloCPU [1,1]'>2</Tablecell>
                    <Tablecell id='arregloCPU [2,1]'>3</Tablecell>
                  </tr>
                  <tr>
                    <Tablecell id='arregloCPU [0,2]'>1</Tablecell>
                    <Tablecell id='arregloCPU [1,2]'>2</Tablecell>
                    <Tablecell id='arregloCPU [2,2]'>3</Tablecell>
                  </tr>
                </tbody>
            </TablePlayer>
            <Avatar>
              <h1>AVATAR PLAYER</h1>
            </Avatar>
          </DivPlayer>
        </ Jueguito>
        

      </IconContext.Provider>
      
    </div>
  )
}
