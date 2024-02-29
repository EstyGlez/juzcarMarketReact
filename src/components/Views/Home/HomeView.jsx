import Carousel1 from "../../Carousel/Carousel";
import CardsForm from '../../cardsform/CardsForm.jsx';
import Wishlist from "../../Wishlist/Wishlist.jsx";

const HomeView = () => {
  return (
    <div>

      <Carousel1/>
      <CardsForm/>
       <img src="https://i.postimg.cc/nrxdhNkC/alcalde-1-1.png" alt="" />
      <Wishlist/>
   
        <div className='home-view'>
        <img className='home-view-photo' src="https://i.postimg.cc/Ss5SPGVD/pisajej-zcar-1-1.png" alt="" />

        <h1 className='home-view-title'>Colaboradores</h1>
         <div className='colab-section'> 
         <section className='colab-section-img'>
         <img  className='pitufo-dad' src="https://i.postimg.cc/DfsmLqRm/pngwing-com-2.png" alt="" />
          <h2 className='colab-text'>En el pintoresco pueblo de Júzcar, los vecinos tejen historias con sus manos. Antonio Luis Jiménez guía visitas, María Luisa del Rosario crea camisetas y mochilas, y Encarnación Soledad Robles da vida a juguetes. Estos vecinos, con sus manos curtidas y corazones llenos de pasión, han tejido una red de creatividad que se extiende más allá de las montañas. Sus obras, ahora digitalizadas en una web, nos invitan a explorar la esencia de Júzcar: la unión entre lo ancestral y lo contemporáneo.</h2>
          </section> 
      </div>

      <h1 className='home-view-title'>Nuestros productos</h1>
      <div className="product-card">
        <img src={imageUrl} alt="Producto" className="product-image" />
        <div className="product-title">{title}</div>
        <div className="product-info">
          <span className="product-price">{price}</span>
          <img src={shoppingCart} alt="Carrito" className="product-icon" /> 
        </div>
      </div>
      
      <img className='photo-pitufos'src="https://i.postimg.cc/fW2TtMNY/pngwing-com-1.png" alt="" />
       <img className='photo-mayor' src="https://i.postimg.cc/nrxdhNkC/alcalde-1-1.png" alt="" />
       
    </div>
  );
}


export default HomeView;