import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
    return (
        <>
            <Gallery>
                {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                    <ImageGalleryItem
                        key={id}
                        smallImg={webformatURL}
                        largeImg={largeImageURL}
                        alt={tags}
                    />
                ))}
            </Gallery>
        </>
    );
};

ImageGallery.prototypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
