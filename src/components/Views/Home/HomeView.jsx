import React from 'react';
import Carousel1 from "../../Carousel/Carousel";
import Wishlist from '../../Wishlist/Wishlist';
import './Homeview.css';
import ChatGPT from '../../chatGPT/ChatGPT';

const HomeView = () => {


  return (
    <div>

      <div className='home-view'>
        <img className='home-view-photo' src="https://i.postimg.cc/Ss5SPGVD/pisajej-zcar-1-1.png" alt="" />
        <img className='home-view-photo-responsive' src="https://i.postimg.cc/DZQ8tMRW/Que-ver-en-Juzcar-RESPONSIVE-1-1.png" alt="" />
        <h1 className='home-view-title'>Colaboradores</h1>
         <div className='colab-section'> 
         <section className='colab-section-img'>
         <img  className='pitufo-dad' src="https://i.postimg.cc/DfsmLqRm/pngwing-com-2.png" alt="" />
          <h2 className='colab-text'>En el pintoresco pueblo de Júzcar, los vecinos tejen historias con sus manos. Antonio Luis Jiménez guía visitas, María Luisa del Rosario crea camisetas y mochilas, y Encarnación Soledad Robles da vida a juguetes. Estos vecinos, con sus manos curtidas y corazones llenos de pasión, han tejido una red de creatividad que se extiende más allá de las montañas. Sus obras, ahora digitalizadas en una web, nos invitan a explorar la esencia de Júzcar: la unión entre lo ancestral y lo contemporáneo.</h2>
          </section>
      <Carousel1/> 
      </div>
      
      <img className='photo-pitufos'src="https://i.postimg.cc/fW2TtMNY/pngwing-com-1.png" alt="" />
      

       <img className='photo-mayor' src="https://i.postimg.cc/nrxdhNkC/alcalde-1-1.png" alt="" />
       <img className='photo-mayor-responsive' src="https://i.postimg.cc/Hnvc2Prf/alcalde-RESPONSIVE-1.png" alt="" />
       
      </div>
      
      <Wishlist />
      <ChatGPT/>

    </div>
  )
}

export default HomeView