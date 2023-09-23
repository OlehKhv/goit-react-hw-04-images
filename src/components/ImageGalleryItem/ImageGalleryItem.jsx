import PropTypes from 'prop-types';
import { useState } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import Modal from './../Modal/Modal';

export const ImageGalleryItem = ({ smallImg, largeImg, alt }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const toggleModal = () => {
        setIsShowModal(prev => !prev);
    };

    return (
        <GalleryItem onClick={toggleModal}>
            <GalleryItemImg src={smallImg} alt={alt} />
            {isShowModal && (
                <Modal imgUrl={largeImg} alt={alt} toggleModal={toggleModal} />
            )}
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
