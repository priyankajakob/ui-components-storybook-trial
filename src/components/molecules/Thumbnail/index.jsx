import { LazyLoadImage } from 'react-lazy-load-image-component';

const Thumbnail = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} 
      width={image.width} />
    <span>{image.caption}</span>
  </div>
);

export default Thumbnail;