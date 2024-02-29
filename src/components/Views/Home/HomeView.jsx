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
    </div>
  );
}


export default HomeView;