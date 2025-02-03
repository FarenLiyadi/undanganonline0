import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/img/gallery1.jpg',
  '/img/gallery2.jpg',
  '/img/gallery3.jpg',
  '/img/gallery4.jpg',
  '/img/gallery5.jpg',
  '/img/gallery6.jpg',
  '/img/gallery7.jpg',
  '/img/gallery8.jpg',
  '/img/gallery9.jpg',
  '/img/gallery10.jpg',
  '/img/gallery11.jpg',
  '/img/gallery12.jpg',
  '/img/gallery13.jpg',
  '/img/gallery14.jpg',
  '/img/gallery15.jpg',
  '/img/gallery16.jpg',
  '/img/gallery17.jpg',
  '/img/gallery18.jpg'
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section>
      <div className='space-y-4 columns-3 md:columns-4'>
        {images.map((src, i) => (
          <div key={i} className='flex-1 overflow-hidden cursor-pointer e-gallery-item group' onClick={() => setIndex(i)} data-aos='zoom-in'>
            <img src={src} className='w-full h-auto transition-all duration-500 e-gallery-image ease group-hover:brightness-50 ' alt={`Gallery image ${i + 1}`} />
          </div>
        ))}
      </div>

      <Lightbox slides={images.map((src) => ({ src }))} open={index >= 0} index={index} close={() => setIndex(-1)} />
    </section>
  );
}
