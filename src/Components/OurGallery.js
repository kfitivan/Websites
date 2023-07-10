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
    </div>
  );
}

export default OurGallery;
