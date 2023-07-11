import React from 'react';
import './gallery.css';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function OurGallery() {
  return (
    <div className="gallery">
      <div className="video-section">
        <YouTube videoId="gDwbAiZZFiY" />
      </div>

      <div className="slider-section">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          <div>
            <img src={require('../assets/cows.PNG')} alt='slide' />
          </div>
          <div>
            <img src={require('../assets/img3 (2).JPG')} alt='slide' />
          </div>
          <div>
            <img src={require('../assets/teabed.PNG')} alt='slide' />
          </div>
        </Carousel>
      </div>

      <div className="photo-section">
        <img src={require('../assets/cows.PNG')} alt='coffee' />
        <img src={require('../assets/img4 (2).JPG')} alt='coffee' />
        <img src={require('../assets/img2 (2).JPG')} alt='coffee' />
        <img src={require('../assets/img1 (2).JPG')} alt='coffee' />
      </div>

      <div className="our-partners">
      <h1>Our Partners</h1>

      <a href="https://ugandacoffee.go.ug/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/UCDA.PNG")}  alt='coffee'/>
      </a>
      
      <a href="https://kanungu.go.ug/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/MAAF.PNG")}  alt='coffee'/>
      </a>

      <a href="https://chemonics.com/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/bukoola.PNG")}  alt='coffee'/>
      </a>
      <a href="https://www.biogassolutions.co.ug/" target="_blank" rel="noopener noreferrer">
      <img src={require ("../assets/biogaslogo.PNG")}  alt='coffee'/>
      </a>
     </div>
    </div>
  );
}

export default OurGallery;
