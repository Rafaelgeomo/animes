import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rank from './componentes/Rank';

function App() {

  const ranks = [
    {
      nome:'Gostei', 
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Fraco',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Colocar na Lista',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Assistir Novamente',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Favoritos',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Vou dar uma chance',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
  ]

  const [colaboradores, setColaboradores] =useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=> {
    //debugger - degubar um codigo linha por linha
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      ranks={ranks.map(rank => rank.nome)} 
      aoColaboradorCadastrado={colaborador => 
      aoNovoColaboradorAdicionado(colaborador)} 
      />      
      
      {ranks.map(rank => <Rank
      key={rank.nome} 
      nome={rank.nome} 
      corPrimaria={rank.corPrimaria} 
      corSecundaria={rank.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.rank === rank.nome)}      
      /> )}   
      
    </div>
  );
}

export default App;
