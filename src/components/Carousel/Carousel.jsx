import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";

function Carousel1() {
  return (
    
    <Carousel data-bs-theme="dark" className='carousel-content ml-auto'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/NjS6Z0nR/colaborador1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Antonio Luis Jiménez</h5>
          <p>Realiza visitas guiadas al pueblo de Júzcar y se encarga realizar los enviíos de los pedidos por toda España</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/5265Pzsx/colaborador2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>María Luisa del Rosario</h5>
          <p>Confecciona las camisetas, mochilas y el material escolar, </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/02tddndW/colaborador3.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Encarnación Soledad Robles</h5>
          <p>
            Es dueña del taller de juguetes,realiza los puzzles y figuras de los pitufos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Carousel1;