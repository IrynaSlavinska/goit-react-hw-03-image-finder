import { ImageList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            smallPicture={webformatURL}
            tags={tags}
            bigPicture={largeImageURL}
          />
        );
      })}
    </ImageList>
  );
};

export default ImageGallery;
