import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'justifiedGallery/dist/css/justifiedGallery.css';
import 'justifiedGallery/dist/js/jquery.justifiedGallery.js';
import { saveAs } from 'file-saver';

//styles
import './JustifiedGallery.scss';

//import icon
import DownloadIcon from '../../image/download.svg';

const JustifiedGallery = ({ images }) => {
  const [showButton, setShowButton] = useState(null);

  useEffect(() => {
    $('#mygallery').justifiedGallery({
      rowHeight: 340,
      lastRow: 'justify',
      margins: 20,
    });
  }, []);

  const downloadImage = (imageUrl, imageName) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, imageName))
      .catch((error) => console.error('Download error:', error));
  };
  
  return (
    <div id="mygallery">
      {images.map((image, index) => (
        <div 
          key={index}
          onMouseEnter={() => setShowButton(index)}
          onMouseLeave={() => setShowButton(null)}
        >
          <img src={image.src} alt={image.alt} />
          {showButton === index && (
            <button 
              type="button"
              className={`mygallery__download ${showButton === index ? 'visible' : ''}`}
              onClick={() => downloadImage(image.src, image.alt)}
            >
              <img
                src={DownloadIcon} 
                alt="download-icon" 
              />
            </button>
            )}
        </div>
      ))}
    </div>
  );
};

export default JustifiedGallery;
